"use client"

import { useState} from "react";
import { AuthContext } from "../context"


const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthentification] = useState(false);
    

    const login = () => {
        setAuthentification((prev) => !prev)
    }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;

