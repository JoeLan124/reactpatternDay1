"use client"

import { useState } from "react";
import { useEvent } from "../../../hooks/useEvent";

export default function MeesageBoard() {
  const [messages, setMessage] = useState([]);

  useEvent("message:add", (data) => {
    console.log(data);
    setMessage([...messages, data]);
  });

  return (
    <div className="flex flex-col text-center">
      <h2 className="text-2xl">Subscriber</h2>
    
      <ul className="list-none">
        {messages.map((message, index) => (
          <li key={index}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
}
