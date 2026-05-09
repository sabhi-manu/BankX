import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { User } from "../types/Auth.type";



interface AuthState {
  user: User;
  token: string;
}

interface AuthContextType{
    authUser:AuthState|null;
    setAuthUser: Dispatch<SetStateAction<AuthState|null>>
}

interface AuthProviderProps {
    children:ReactNode
}

const AuthContext = createContext<AuthContextType|null> (null);

export function AuthProvider({ children }:AuthProviderProps) {

  const [authUser, setAuthUser] = useState<AuthState|null> (null);



  return (<AuthContext.Provider value={{authUser,setAuthUser}}>

    {children}
    
    </AuthContext.Provider>)
}


export function useAuth(){
    let context = useContext(AuthContext)
 if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}