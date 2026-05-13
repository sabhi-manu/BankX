import accountModel from "../models/account.model.js"


async function createAccountController(req,res,next) {
    const user = req.user

    const account = await accountModel.create({
        user: user._id
    })
    
   return res.status(201).json({
        message:"Account created.",
        account
    })
}

async function getUserAccount(req,res,next) {
    try {
        const userId = req.user._id
        const account = await accountModel.findOne({user:userId})
        return res.status(200).json({
            message:"user account details.",
            account
        })
    } catch (error) {
        console.log("Error to get user account details.")
    }
    
}


async function getUserAccountBalance(req,res,next) {

    let {accountId} = req.params
    console.log("account id from params :",accountId)

    const account = await accountModel.findOne({_id:accountId, user:req.user._id})

    if(!account){
        return res.status(404).json({
            message:"Accont not found."
        })
    }

    const balance = await account.getBalance()
    console.log ("current balance in account :",balance)

   return res.status(200).json({
        accountId,
        balance
    })

    
}


export default {
    createAccountController,
    getUserAccount,
    getUserAccountBalance
}