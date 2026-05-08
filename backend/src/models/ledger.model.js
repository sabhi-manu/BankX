import mongoose  from "mongoose";

const ledgerSchema = new mongoose.Schema({
    account:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'account',
        required:[true,"Account required for ledger."],
        index:true,
        immutable:true
    },
    amount:{
        type:Number,
        required:[true,"Amount is required for ledger entry."],
        immutable:true,
    },
    type:{
        type:String,
        enum:["CREDIT","DEBIT"],
        immutable:true,
        required:true
    },
    transaction:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"transaction",
        required:[true,"Transaction required for Ledger."],
        index:true,
        immutable:true
    }
},{timestamps:true})


function preventLedgerModification (){
    throw new Error("Ledger entries are immutable and cannot be modified or deleted.")
}

ledgerSchema.pre("findOneAndUpdate",preventLedgerModification);
ledgerSchema.pre("findOneAndDelete",preventLedgerModification);
ledgerSchema.pre("findOneAndReplace",preventLedgerModification);
ledgerSchema.pre("deleteMany",preventLedgerModification);
ledgerSchema.pre("deleteOne",preventLedgerModification);
ledgerSchema.pre("updateMany",preventLedgerModification);
ledgerSchema.pre("updateOne",preventLedgerModification);
ledgerSchema.pre("update",preventLedgerModification);       

const ledgerModel = mongoose.model("ledger",ledgerSchema)

export default ledgerModel