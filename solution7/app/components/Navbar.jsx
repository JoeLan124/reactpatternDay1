"use client";
import { useAuth } from "@/app/hooks/useAuth";

const Navbar = () => {
    const { isAuthenticated, login, isEnglish, setLanguage } =
      useAuth();
    
  return (
    <div className="flex justify-between items-center w-full h-16 bg-blue-200 p-4">
      <button onClick={login}>{isAuthenticated ? "logout" : "login"}</button>
      <button onClick={setLanguage}> User language: {isEnglish? "englisch": "deutsch"}
      </button>
    </div>
  );
};
export default Navbar;
