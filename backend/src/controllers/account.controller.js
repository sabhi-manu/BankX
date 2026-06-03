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

async function getSuggestionAccount(req,res) {
    let query = req.query.q
    query = query.trim().toLowerCase()
    // console.log("query from params :",query)
    let users = await accountModel.aggregate([
       {
    $lookup: {
      from: "users",
      localField: "user",
      foreignField: "_id",
      as: "userDetails"
    }
  },

 {
    $unwind: "$userDetails"
  },
  {
    $match: {
      "userDetails.userName":{$regex:query,$options:"i"}
    }
  },
  {
    $project: {
      _id:1,
      "userDetails.userName":1
    }
  }
    ])
    // console.log('user by query :=',users)
    res.status(200).json({
        message:"account suggestion",
        users
    })
    
}

export default {
    createAccountController,
    getUserAccount,
    getUserAccountBalance,
    getSuggestionAccount
}