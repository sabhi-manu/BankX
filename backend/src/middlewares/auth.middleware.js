import jwt from "jsonwebtoken"
import UserModel from "../models/user.model.js"
import tokenBlackListModel from "../models/blackList.model.js";

async function authMiddleware(req, res, next) {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1]
        if (!token) {
            return res.status(401).json({ message: "Invalid or expired token" });
        }

        const blacklistToken = await tokenBlackListModel.findOne({ token })
        if (blacklistToken) {
            return res.status(401).json({
                message: "unauthorized access . token expired"
            })
        }

        let decode = jwt.verify(token, process.env.JWT_SECRET)

        console.log(decode)

        let user = await UserModel.findById(decode.userId).select("-password")
        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }
        req.user = user
        req.token = token
        next()

    } catch (error) {
        console.error("Auth middleware error:", error.message);
        return res.status(401).json({
            message: "Unauthorized access"
        });
    }

}

export default authMiddleware