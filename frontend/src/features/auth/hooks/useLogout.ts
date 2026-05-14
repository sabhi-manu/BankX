import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../../../api/auth.api";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";


export function useLogout() {
    const { setAuthUser } = useAuth();
    const navigate = useNavigate();
    return (
        useMutation({
            mutationFn: logoutApi,
            onSuccess:() => {
                console.log("user logount successfully.")
                setAuthUser(null)
                localStorage.removeItem("token");
                navigate("/login")
            },
            onError:(err) => {
                console.log("logout error ==>",err)
            }
        })
    )
}