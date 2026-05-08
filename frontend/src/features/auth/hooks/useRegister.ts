import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../../../api/auth.api";

export function useRegister() {
  console.log("register hook call...");
  return useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => {
      console.log("user register successfully...");
      console.log(data);
    },

    onError: (error) => {
      console.log("user NOT register.");
      console.log(error);
    },
  });
}
