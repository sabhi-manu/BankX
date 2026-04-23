import express from "express"
import authMiddleware from "../middlewares/auth.middleware.js"
import accountController from "../controllers/account.controller.js"


const route = express.Router()



route.post("/",authMiddleware,accountController.createAccountController)
route.post("/details",authMiddleware,accountController.getUserAccount)
route.post("/balance/:accountId",authMiddleware,accountController.getUserAccountBalance)



export default route