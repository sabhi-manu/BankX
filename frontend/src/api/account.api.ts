import axios from "./axios"



export async function accountApi() {
    let resp = await axios.get("/")
    console.log('response account ==>',resp)
    return resp.data
}