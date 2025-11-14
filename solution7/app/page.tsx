
"use client"
import Navbar from "./components/Navbar";
import { useAuth } from "@/app/hooks/useAuth";

export default function Home() {
  const { isAuthenticated, login, isEnglish, setLanguage} = useAuth();

  const english = ["User John", "please log in"]
  const deutsch = ["Nutzer Johannes", "Bitte anmelden"];

  const activeLanguage = isEnglish ? english: deutsch

  return (
    <div className="min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black text-black">
      <Navbar />
      <p className="p-6 text-red-700">
        {isAuthenticated
          ? activeLanguage[0]
          : activeLanguage[1]}
      </p>
    </div>
  );
}
