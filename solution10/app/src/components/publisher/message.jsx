"use client"
import { useState } from "react";
import { eventBus } from "../../../lib/eventBus";

export default function MessagePublisher() {
  const [text, setText] = useState("");

  const handleClick = () => {
    if (!text.trim()) return;

    eventBus.publish("message:add", {
      id: crypto.randomUUID(),
      text: text,
    });
    setText("");
  };

  return (
    <div className="flex space-x-2 border rounded border-gray-600 p-2 m-3 items-center">
      <h2 className="text-2xl">Publisher</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-400 rounded p-1 text-black"
        placeholder="Enter message"
      />
      <button
        className="bg-emerald-500 rounded p-1 cursor-pointer px-3"
        onClick={handleClick}>
        Send Message
      </button>
    </div>
  );
}
