"use client"

import { useState } from "react";
import { useEvent } from "../../hooks/useEvent";

export default function MeesageBoard() {
  const [messages, setMessage] = useState([]);

  useEvent("message:add", (data) => {
    console.log(data);
    setMessage([...items, data]);
  });

  return (
    <div className="flex flex-col text-center">
      <h2 className="text-2xl">Subscriber</h2>
      <p className="text-4xl text-center">
        🛒 {messages.length}
      </p>
      <ul className="list-none">
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
}
