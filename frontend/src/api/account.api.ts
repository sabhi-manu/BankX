import axios from "./axios"



export async function accountApi() {
    let resp = await axios.get("/accounts/details")
    // console.log('response account ==>',resp)
    return resp.data
}

export async function balanceApi(accountId:string) {
    console.log('account id :',accountId)
    let resp = await axios.post(`/accounts/balance/${accountId}`)
    console.log('response balance ==>',resp)
    return resp.data
}

export async function createAccountApi() {
    let resp = await axios.post("/accounts")
    console.log('response create account ==>',resp)
    return resp.data
}