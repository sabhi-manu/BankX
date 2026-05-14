import express from "express"
import authController from "../controllers/auth.controller.js"
import authMiddleware from "../middlewares/auth.middleware.js"



const route = express.Router()


route.post("/register",authController.userRegisterController)
route.post("/login",authController.userLoginController)
route.post("/logout",authController.userLogoutController)
route.get("/current-user",authMiddleware,authController.getCurrentUserController)


export default route

