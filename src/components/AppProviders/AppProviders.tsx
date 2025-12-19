  
  import { useState, useMemo} from "react";
import type { AuthContextType } from "../../types";
import AuthContext from "../../context/AuthContext";
import  type { ReactNode } from "react";

interface AppProvidersProps {
  children: ReactNode;
}

  export function AppProviders({ children }: AppProvidersProps) {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const login = (user: string) => {
    setCurrentUser(user);
    setIsAuthenticated(prevState => true)
  }
  const logout = () => {
    setCurrentUser(prevUser => null)
    setIsAuthenticated(prevState => false)
  }
  const authValue: AuthContextType = useMemo(() => ({ currentUser, isAuthenticated, login, logout }), [currentUser]);

  return(
     <AuthContext.Provider value={authValue}>
        {children}
     </AuthContext.Provider>
  )
}