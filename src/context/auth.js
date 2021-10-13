import React, { createContext, useContext } from "react";
import useStore from "../lib/state";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../lib/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const setAuthStatus = useStore((state) => state.setAuthStatus);
  const setUser = useStore((state) => state.setUser);

  const login = () => {
    signInWithPopup(auth, provider);
  };

  const logout = () => {
    signOut(auth);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthStatus(true);
      setUser(user);
    } else {
      setAuthStatus(false);
      setUser(null);
    }
  });

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
