import {
  createContext,
<<<<<<< HEAD
  useCallback,
=======
>>>>>>> c289bd4b7bb7b72dec1378dac43e1be1fd5ea158
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { User } from "../types/Auth.type";
<<<<<<< HEAD
import { getCurrentUserApi } from "../api/auth.api";

=======
>>>>>>> c289bd4b7bb7b72dec1378dac43e1be1fd5ea158

interface AuthState {
  user: User;
  token: string;
}

interface AuthContextType {
  authUser: AuthState | null;
  setAuthUser: Dispatch<SetStateAction<AuthState | null>>;
<<<<<<< HEAD
  isAuthLoading: boolean;
  refreshAuthUser: () => Promise<void>;
=======
  isLoading: boolean;
>>>>>>> c289bd4b7bb7b72dec1378dac43e1be1fd5ea158
}

interface AuthProviderProps {
  children: ReactNode;
<<<<<<< HEAD
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authUser, setAuthUser] = useState<AuthState | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const refreshAuthUser = useCallback(async () => {
    setIsAuthLoading(true);
    try {
      const data = await getCurrentUserApi();
      setAuthUser({
        user: data.user,
        token: data.token,
      });
    } catch {
      setAuthUser(null);
    } finally {
      setIsAuthLoading(false);
    }
  }, []);
  useEffect(() => {
    void refreshAuthUser();
  }, [refreshAuthUser]);


  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        isAuthLoading,
        refreshAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
=======
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
>>>>>>> c289bd4b7bb7b72dec1378dac43e1be1fd5ea158
  }

  return context;
}
