import mongoose, { Error }  from "mongoose";


 async function connectDataBase (){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DATA BASE connect successfully..")
    } catch (error) {
        console.log("Data base not connect ...")
        process.exit(1)
    }
}

export default connectDataBase