import mongoose from "mongoose"
import accountModel from "../models/account.model.js"
import transactionModel from "../models/transaction.model.js"
import ledgerModel from "../models/ledger.model"
import emailService from "../utils/mails/emails.js"

async function createTransaction(req,res) {

    const {fromAccount,toAccount,amount,idempotenceKey} = req.body

    if(!fromAccount || !toAccount || !amount || !idempotenceKey){
        return res.status(400).json({message:"All fields are required for creating transaction."})
    }   

    const fromUserAccount = await accountModel.findOne({
        _id:fromAccount
    }) 

    const toUserAccount = await accountModel.findOne({
        _id:toAccount
    })
    
    if(!fromUserAccount || !toUserAccount){
        return res.status(400).json({
            message:"Invalid fromAccount or toAccount."
        })
    }

    // check the current user == account user 

    if(fromUserAccount.user.toString() !== req.user.userId.toString()){
        return res.status(403).json({
            message:"You are not authorized to perform transaction from this account."
        })
    }


    // check the account status 

    if(fromUserAccount.status === "FROZEN" || toUserAccount.status === "FROZEN"){
      return res.status(400).json({
        message:"Transaction cannot be processed as one of the accounts is frozen."
      })    
    }
    if(fromUserAccount.status === "CLOSED" || toUserAccount.status === "CLOSED"){
        return res.status(400).json({
            message:"Transaction cannot be processed as one of the accounts is closed."
        })    
    }   

    // check idempotenceKey 


    const isTransactionAlreadyExist = await transactionModel.findOne({
        idempotenceKey
    })

    if(isTransactionAlreadyExist.status === "PENDING"){
       return res.status(200).json({
        message:"Transaction is already in progress."
       })
    }
    if(isTransactionAlreadyExist.status==="FAILED"){
       return res.status(500).json({
        message:"Transaction has already failed. Retry!."
       })
    }

    if(isTransactionAlreadyExist.status === "COMPLETE"){
      return res.status(200).json({
        message:"Transaction has already completed."
      })
    }
    if(isTransactionAlreadyExist.status === "REVERSED"){
      return res.status(500).json({
        message:"Transaction has already been reversed."
      })
    }

    // check the balance of from account

      const balance = await fromUserAccount.getBalance()
      if(balance<amount){
         return res.status(400).json({
            message:`Insufficient balance in the from account. Current balance is ${balance}.`
         })
      }

    // create transaction

    let transaction;
    
    const session = await mongoose.startSession()
    try {
          session.startTransaction()


      transaction = await transactionModel.create([{
        fromAccount,
        toAccount,
        amount,
        status:"PENDING",
        idempotenceKey
      }],{session})[0];

      const forAccountLedger = await ledgerModel.create([{
        account:fromAccount,
        amount,
        type:"DEBIT",
        transaction:transaction._id

      }],{session})
      const toAccountLedger = await ledgerModel.create([{
        account:toAccount,
        amount,
        type:"CREDIT",
        transaction:transaction._id

      }],{session})

      await transactionModel.findByIdAndUpdate(
       transaction._id,
        {status:"COMPLETE"},
        {session}
      )

      await session.commitTransaction()


    } catch (error) {
      console.log("error in transaction")
      await session.abortTransaction()
      return res.status(500).json({
        message:"Transaction failed. Please try again.",
        error:error.message
      })
    }
    session.endSession()

    await emailService.sendTransactionEmail({
        userName:fromUserAccount.userName,
        email:fromUserAccount.email,
        amount,
        fromAccount:fromUserAccount.accountNumber,
        toAccount:toUserAccount.accountNumber
    })  

    return res.status(201).json({
        message:"Transaction completed successfully.",
       transaction:transaction 
    })
}