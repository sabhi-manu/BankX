import express from "express"
import authController from "../controllers/auth.controller.js"



const route = express.Router()


route.post("/register",authController.userRegisterController)
route.post("/login",authController.userLoginController)
route.post("/logout",authController.userLogoutController)



export default route

