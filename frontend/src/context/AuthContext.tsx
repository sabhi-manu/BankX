import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { User } from "../types/Auth.type";

interface AuthState {
  user: User;
  token: string;
}

interface AuthContextType {
  authUser: AuthState | null;
  setAuthUser: Dispatch<SetStateAction<AuthState | null>>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}
const API_URL = import.meta.env.VITE_API_URL;

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authUser, setAuthUser] = useState<AuthState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function restoreSession() {
      try {
        const res = await fetch(`${API_URL}/auth/current-user`, {
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          console.log("response data :", data);

          setAuthUser({ user: data.user, token: data.token });
        } else {
          setAuthUser(null);
        }
      } catch (error) {
        console.log("refresh .. catch run...");
        setAuthUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    restoreSession();
  }, []);

  console.log("auth usestate ...", authUser);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  let context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
