import { useQuery } from "@tanstack/react-query";
import { accountApi } from "../../../api/account.api";



export function useAccounts (){
    return useQuery({
        queryKey:['account'],
        queryFn:accountApi
    })
}