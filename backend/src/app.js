import express, { json, urlencoded } from "express"
import AuthRoute from "./routes/auth.route.js"
import cookieParser  from "cookie-parser"


const app = express()
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",AuthRoute)




export default app