
import axios from "./axios"

interface transferApi {
   toAccount: string;
  amount: string;
  description:string;
    idempotenceKey: string;
}

export async function transferMoneyApi(data:transferApi) {
    console.log('api transfer money data ==>',data)
    let resp = await axios.post("/transaction",data)
    console.log('rsponse transfer money =+>',resp)
    return resp.data
    
}

export async function systemTransferMoneyApi(data:transferApi) {
    console.log('api system transfer money data ==>',data)
    let resp = await axios.post("/system/initial-fund",data)
    console.log('rsponse system transfer money =+>',resp)
    return resp.data
    
}   