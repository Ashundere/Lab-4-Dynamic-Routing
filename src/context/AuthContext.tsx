import React from "react"
import type { AuthContextType } from "../types";

export const AuthContext = React.createContext<AuthContextType>({
  currentUser: null,
  isAuthenticated: false,
  login: () => console.warn('no user provided'),
  logout: () => console.warn('no user provided'),
});

export default AuthContext