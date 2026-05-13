import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../../../api/auth.api";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router";

export function useRegister() {
  const navigate = useNavigate();
  const {setAuthUser} = useAuth()
  return useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => {
      
      console.log(data);
      
      setAuthUser({
        token:data.token,
        user:data.user
      })
      navigate("/");
    },

    onError: (error) => {
      console.log("user NOT register.");
      console.log(error);
    },
  });
}
