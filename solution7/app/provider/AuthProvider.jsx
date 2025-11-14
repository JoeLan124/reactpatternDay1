"use client"

import { useState} from "react";
import { AuthContext } from "../context"


const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthentification] = useState(false);
   const [isEnglish, setEnglish] =
     useState(true);
    

    const login = () => {
        setAuthentification((prev) => !prev)
    }
  
  const setLanguage = () => {
    setEnglish((prev) => !prev)
  }
  

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        isEnglish,
        setLanguage,
      }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;

