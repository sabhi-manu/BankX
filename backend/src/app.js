import express, { json, urlencoded } from "express"
import AuthRoute from "./routes/auth.route.js"
import cookieParser  from "cookie-parser"
import AccountRoute from "./routes/account.route.js"

const app = express()
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",AuthRoute)
app.use("/api/accounts",AccountRoute)



export default app