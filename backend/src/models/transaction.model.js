import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema({
    fromAccount:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"account",
        required:[true,"Transaction account must ."],
        index:true
    },
    toAccount:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"account",
        required:[true,"Trasaction account must."],
        index:true
    },
    amount:{
        type:Number,
        required:[true,"Amount is required for creating transaction."],
        min:[0,"Transaction amount should not be negative."]
    },
    status:{
        type:String,
        enum:{
            values:["COMPLETE","PENDING","FAILED","REVERSED"],
            message:"Status can be either COMPLETE ,PENDING , FAILED or REVERSED."
        },
        default:"PENDING"
    },
    idempotenceKey:{
        type:String,
        required:[true,"Idempotency key is required for creating transaction."],
        index:true,
        unique:true
    },
    description:{
        type:String
    }
},{
    timestamps:true
})





const transactionModel = mongoose.model("transaction",transactionSchema)

export default transactionModel

