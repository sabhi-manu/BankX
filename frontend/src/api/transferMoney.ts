
import axios from "./axios"

interface transferApi {
    to:string;
    amount:string
}

export async function transferMoneyApi(data:transferApi) {
    console.log('api transfer money data ==>',data)
    let resp = await axios.post("/transfer",data)
    console.log('rsponse transfer money =+>',resp)
    return resp.data
    
}