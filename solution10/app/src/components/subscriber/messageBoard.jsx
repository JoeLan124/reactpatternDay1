"use client"

import { useState, useEffect } from "react";
import { useEvent } from "../../../hooks/useEvent";

export default function MeesageBoard() {
  const [messages, setMessage] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("notifications");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(messages));
  }, [messages]);

  useEvent("message:add", (data) => {
    console.log(data);
    setMessage((prev) => [...prev, data]);
  });

  return (
    <div className="flex flex-col text-center">
      <h2 className="text-2xl">Subscriber</h2>
    
      <ul className="list-none">
        {messages.map((message, index) => (
          <li key={index}>
            <div className="flex justify-center items-center gap-4">

                {message.text} 
            
            <div className={`${message.category === "success" ? "text-green-500" : message.category === "error" ? "text-red-500" : "text-yellow-500"}` }> 
                {message.category}
            </div>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
