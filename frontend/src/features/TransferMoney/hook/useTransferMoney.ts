import { useMutation } from "@tanstack/react-query";

import {
  systemTransferMoneyApi,
  transferMoneyApi,
} from "../../../api/transferMoney";
import { useAuth } from "../../../context/AuthContext";



interface TransferData {
  to: string;
  amount: string;
}

export function useTransferMoney() {

  const { authUser } = useAuth();

  return useMutation({

    mutationFn: (data: TransferData) => {

      if (authUser?.user.systemUser) {
        return systemTransferMoneyApi(data);
      }

      return transferMoneyApi(data);
    },

    onSuccess: (data) => {
      console.log("response transfer ==>", data);
    },

    onError: (error) => {
      console.log(
        "error occur in money transfer : ",
        error
      );
    },
  });
}