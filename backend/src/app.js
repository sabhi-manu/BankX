import express, { json, urlencoded } from "express"
import AuthRoute from "./routes/auth.route.js"
import cookieParser  from "cookie-parser"
import AccountRoute from "./routes/account.route.js"
import TransactionRoute from "./routes/transaction.route.js"
import cors from "cors"

const app = express()
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth",AuthRoute)
app.use("/api/accounts",AccountRoute)
app.use("/api/transaction",TransactionRoute)



export default app