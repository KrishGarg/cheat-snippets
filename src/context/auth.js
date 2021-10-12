import React, { createContext, useContext } from "react";
import useStore from "../lib/state";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const user = useStore((state) => state.user);
  const setAuthStatus = useStore((state) => state.setAuthStatus);
  const setUser = useStore((state) => state.setUser);

  const logout = () => {
    console.log("logout");
    setAuthStatus(false);
    setUser(null);
  };

  const login = () => {
    console.log("login");
    setAuthStatus(true);
    setUser(null); // User data instead
  };

  const context = {
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
