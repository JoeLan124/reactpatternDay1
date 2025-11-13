
"use client"
import Navbar from "./components/Navbar";
import { useAuth } from "@/app/hooks/useAuth";

export default function Home() {
  const { isAuthenticated, login } = useAuth();


  return (
    <div className="min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black text-black">
      <Navbar />
      <p className="p-6 text-red-700">{ isAuthenticated? "User John": "please log in"}</p>
    </div>
  );
}
