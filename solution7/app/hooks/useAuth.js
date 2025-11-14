import { AuthContext } from "../context"
import { use } from "react";


const useAuth = () => {
  const { isAuthenticated, login, isEnglish, setLanguage } = use(AuthContext);

  return {
    isAuthenticated,
    login,
    isEnglish,
    setLanguage,
  };

}

export { useAuth };