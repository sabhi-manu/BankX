import { useMutation, useQuery } from "@tanstack/react-query";
import { accountApi, balanceApi } from "../../../api/account.api";



export function useAccounts (){
    return useQuery({
        queryKey:['account'],
        queryFn:accountApi
    })
}

export function useBalance(accountId: string) {

  return useQuery({

    queryKey: ["balance", accountId],

    queryFn: () => balanceApi(accountId),

    enabled: !!accountId
  });
}