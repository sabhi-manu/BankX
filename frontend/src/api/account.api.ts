import axios from "./axios"



export async function accountApi() {
    let resp = await axios.get("/accounts/details")
    // console.log('response account ==>',resp)
    return resp.data
}

export async function balanceApi(accountId:string) {
    console.log('account id :',accountId)
    let resp = await axios.post(`/accounts/balance/6a02a832d70dcda53bf6068c`)
    console.log('response balance ==>',resp)
    return resp.data
}