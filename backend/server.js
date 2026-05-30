import dotenv from "dotenv"
dotenv.config()

import app from "./src/app.js";
import connectDataBase from "./src/configs/db.js";


const PORT = process.env.PORT || 3000;

async function main() {
    try {

        await connectDataBase()
        app.listen(PROT, () => {
            console.log("server run successfully on Port :", PROT)
        })


    } catch (error) {
        console.log("server Problem...")
        throw new Error("Server not Running....")
    }

}
main()