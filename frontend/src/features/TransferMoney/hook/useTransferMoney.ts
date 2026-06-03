import { useMutation, useQuery } from "@tanstack/react-query";

import {
  searchAccountApi,
  systemTransferMoneyApi,
  transferMoneyApi,
} from "../../../api/transferMoney";
import { useAuth } from "../../../context/AuthContext";



interface TransferData {
  toAccount: string;
  amount: string;
  description:string;
  idempotenceKey: string;
}

export function useTransferMoney(resetForm:()=>void) {

  const { authUser } = useAuth();
  // console.log('auth details in use transfer money ..',authUser)

  return useMutation({

    mutationFn: (data: TransferData) => {

      if (authUser?.user.systemUser) {
        return systemTransferMoneyApi(data);
      }

      return transferMoneyApi(data);
    },

    onSuccess: (data) => {
      console.log("response transfer ==>", data);
      resetForm()
    },

    onError: (error) => {
      console.log(
        "error occur in money transfer : ",
        error
      );
    },
  });
}

export function useSearchAccount(query:string){
  return useQuery({
    queryKey:["searchAccount",query],
    queryFn:()=>searchAccountApi(query)
  })
}