import { useMutation } from "@tanstack/react-query";
import { createAccountApi } from "../../../api/account.api";

export function useCreateAccount() {
    return (
        useMutation({
            mutationFn:createAccountApi
          
        })
    )
}