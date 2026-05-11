import { useMutation } from "@tanstack/react-query";
import { transferMoneyApi } from "../../../api/transferMoney";




export function useTransferMoney (){
    return useMutation ({
        mutationFn: transferMoneyApi,
        onSuccess:(data)=>{
            console.log('response transfer ==>',data)
        },
        onError:(error)=>{
            console.log('error occur in money transfer : ',error)
        }
    })
}