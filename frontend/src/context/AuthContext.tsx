import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { User } from "../types/Auth.type";
import { getCurrentUserApi } from "../api/auth.api";


interface AuthState {
  user: User;
  token: string;
}

interface AuthContextType {
  authUser: AuthState | null;
  setAuthUser: Dispatch<SetStateAction<AuthState | null>>;
  isAuthLoading: boolean;
  refreshAuthUser: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
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
  }

  return context;
}