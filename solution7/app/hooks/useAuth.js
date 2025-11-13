import { AuthContext } from "../context"
import { use } from "react";


const useAuth = () => {
  const { isAuthenticated, login } = use(AuthContext);

  return { isAuthenticated, login };

}

export { useAuth };