import axios from "./axios"


interface TransactionProps {
    idempotenceKey:string,
    to:string,
    amount:string
}

 export async function transactionApi(data:TransactionProps) {
    let resp = await axios.post("/", data)
    console.log("transaction api response ==>",resp)
    return resp.data
    
}