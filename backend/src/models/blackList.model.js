import mongoose, { mongo } from "mongoose"

const tokenBlackListSchema = new mongoose.Schema({
    token:{
        type:String,
        unique:true
    }
},{timestamps:true})


tokenBlackListSchema.index({createdAt:1},{expires:"1d"})

const tokenBlackListModel = mongoose.model("tokenBlackList",tokenBlackListSchema)


export default tokenBlackListModel
