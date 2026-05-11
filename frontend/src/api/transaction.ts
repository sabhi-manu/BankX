import axios from "./axios"


 export async function transactionApi() {
    let resp = await axios.get("/")
    console.log("transaction api response ==>",resp)
    return resp.data
    
}