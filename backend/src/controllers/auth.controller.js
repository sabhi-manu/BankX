import UserModel from "../models/user.model.js"
import jwt from "jsonwebtoken"
import emailService from "../utils/mails/emails.js"
import tokenBlackListModel from "../models/blackList.model.js"

async function userRegisterController(req,res,next) {
    try {
        const {email,password,userName,systemUser=false,phoneNumber} = req.body

        const isUser = await UserModel.findOne({email})

        if(isUser){
            return res.status(422).json({
                message:"User  already Exist With Eamil",
                status:"failed"
            })
        }

        const user = await UserModel.create({
            email,password,userName,systemUser,phoneNumber
        })

        const token = await jwt.sign({userId:user._id},process.env.JWT_SECRET)
        res.cookie("token",token)


    await emailService.sendRegisterEmail({
            userName:user.userName,
            email:user.email
        })

       return res.status (201).json({
            message:"user register successfully.",
            status:"success",
            user:{
                _id:user._id,
                email:user.email,
                userName:user.userName,
                phoneNumber:user.phoneNumber,
                updatedAt:user.updatedAt,
                createdAt:user.createdAt,
                systemUser:user.systemUser
            },
            token

        })
    } catch (error) {
        console.log("user Register failed.")
        next(error)
    }
    
}



async function userLoginController(req,res,next) {
    try {
        const {email,password} = req.body
        
        const user = await UserModel.findOne({email})
        if(!user) {
              return res.status(401).json({
                message:"User  Not Exist .",
                status:"failed"
            })
        }

        const isPassword = await user.comparePassword(password)

        if(!isPassword){
              return res.status(404).json({
                message:"User Detals Not valid .",
                status:"failed"
            })
        }

          const token = await jwt.sign({userId:user._id},process.env.JWT_SECRET)
        res.cookie("token",token)

        return res.status(200).json({
            message:"User Login successfully.",
            status:"success",
            user:{
                _id:user._id,
                email:user.email,
                userName:user.userName,
                phoneNumber:user.phoneNumber,
                updatedAt:user.updatedAt,
                createdAt:user.createdAt,
                systemUser:user.systemUser
            },
            token

        })

    } catch (error) {
        console.log("Error in login .")
        next(error)
        
    }
}


async function userLogoutController(req,res,next) {
    try {
        const token = req.cookies.token ||  req.headers.authorization?.split(" ")[1]

        if(!token){
            return res.status(400).json({
                messsage:"user logged out ."
            })
        }
        await tokenBlackListModel.create({
            token
        })

        await res.clearCookie("token")
        return res.status(200).json({
            message:'user logout successfully.',
            statue:"success."
        })
    } catch (error) {
         console.log("Error in Logout .")
        next(error)
         
    }
    
}

export default {
    userRegisterController,
    userLoginController,
    userLogoutController
}