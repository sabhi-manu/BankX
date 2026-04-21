import accountModel from "../models/account.model.js"


async function createAccountController(req,res,next) {
    const user = req.user

    const account = await accountModel.create({
        user: user._id
    })
    
    res.status(201).json({
        message:"Account created.",
        account
    })
}





export default {
    createAccountController
}