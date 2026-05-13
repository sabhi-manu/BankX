import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../../api/auth.api";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate();
  const { setAuthUser } = useAuth();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      console.log("api response login success==>", data);

      setAuthUser({
        user: data.user,
        token: data.token,
      });

      navigate("/");
    },
    onError: (error) => {
      console.log("api fail login ==>");
      console.log(error);
    },
  });
}
