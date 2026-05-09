import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../../../api/auth.api";
import { useAuth } from "../../../context/AuthContext";

export function useRegister() {
  console.log("register hook call...");
  const {setAuthUser} = useAuth()
  return useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => {
      console.log("user register successfully...");
      console.log(data);
      
      setAuthUser({
        token:data.token,
        user:data.user
      })
    },

    onError: (error) => {
      console.log("user NOT register.");
      console.log(error);
    },
  });
}
