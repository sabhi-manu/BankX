import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../../api/auth.api";



export function useLogin (){
    return useMutation({
        mutationFn:loginApi,
        onSuccess:(data)=>{
            console.log("api response login success==>",data)
        },
        onError:(error)=>{
            console.log('api fail login ==>')
            console.log(error)
        }
    })
}