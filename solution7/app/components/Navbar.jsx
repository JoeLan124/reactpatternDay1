"use client";
import { useAuth } from "@/app/hooks/useAuth";

const Navbar = () => {
    const {isAuthentificated, login} = useAuth();
    
  return (
    <div className="flex justify-between items-center w-full h-16 bg-blue-200 p-4">
          <button onClick={login}>{isAuthentificated?"logout":"login" }</button>
    </div>
  );
};
export default Navbar;
