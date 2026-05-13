import express from "express"
import transactionController from "../controllers/transaction.controller.js"
import authMiddleware from "../middlewares/auth.middleware.js"
import systemAuthMiddleware from "../middlewares/systemAuth.middleware.js"

const route = express.Router()

route.post("/",authMiddleware,transactionController.createTransaction)
route.post("/system/initial-fund",systemAuthMiddleware,transactionController.createInitialFund)
route.get("/",authMiddleware,transactionController.getTransactions)


export default route 