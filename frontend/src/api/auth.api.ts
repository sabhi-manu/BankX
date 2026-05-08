import axios from "../api/axios"

interface UserRegisterProps {
    
        userName:string,
        email:string,
        password:string
    
}

interface UserLoginProps {
        email:string,
        password:string 
}

 export async function registerApi(data:UserRegisterProps) {
    console.log("register data ==>",data)
    let resp = await axios.post("/auth/register",data)
    console.log("api response ==>",resp)
    return resp.data
}



export async function loginApi(data:UserLoginProps) {
        console.log('login data ==>',data)
        let resp = await axios.post("/auth/login",data)
        console.log('api response ==>',resp)
        return resp.data
}
