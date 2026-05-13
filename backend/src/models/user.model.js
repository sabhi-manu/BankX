import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email required fro creating a user ."],
        unique:[true,"Email already Exists."],
        lowercase:true,
        trim:true
    },
    userName:{
         type:String,
        required:[true,"User Name required fro creating an Account. ."], 
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"Password required for creating an account."]
    },
    systemUser:{
        type:Boolean,
        default:false,
        immutable:true,
        // select:false
    },
    phoneNumber:{
        type:String,
        required:[true,"Phone number is required for creating an account."],
        unique:[true,"Phone number already exists."],
        trim:true
    }

},{timestamps:true})


userSchema.pre("save",async function(next){
   if(!this.isModified("password")) return 
   try {
    let hash = await bcrypt.hash(this.password,10)
    this.password = hash
   
   } catch (error) {
    console.log("password hash Problem. ")
   throw new Error("Password hashing failed");
   }
})

userSchema.methods.comparePassword = function (password){
    try {
        return bcrypt.compare(password,this.password)
    } catch (error) {
        console.log("incorrect password !")
    }
}


const UserModel = mongoose.model("user",userSchema)

export default UserModel