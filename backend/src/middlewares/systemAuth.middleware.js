import jwt from "jsonwebtoken"
import UserModel from "../models/user.model.js"
import tokenBlackListModel from "../models/blackList.model.js"


async function systemAuthMiddleware(req, res, next) {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1]
        if (!token) {
            return res.status(401).json({
                message: "invalid  or expired token"
            })
        }
        console.log("Token received in system auth middleware:", token)

        const blacklistToken = await tokenBlackListModel.findOne({ token })
        console.log("Blacklisted token:", blacklistToken)
        if (blacklistToken) {
            return res.status(401).json({
                message: "unauthorized access . token expired"
            })
        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET)

        const user = await UserModel.findOne({
            _id: decode.userId
        }).select("+systemUser")

        if (!user.systemUser) {
            return res.status(403).json({
                message: "Forbidden: system access only"
            });
        }

        req.user = user
        next()

    } catch (error) {

        console.error("System auth error:", error.message);

        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }

}

export default systemAuthMiddleware