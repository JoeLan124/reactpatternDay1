"use client"
import { useState } from "react";
import useClipboard from "@/app/hooks/useClipBoard";
import UserSettings from "@/app/components/UserSettings"
import DropDownComponent from "@/app/components/DropDownComponent"

export default function Home ()  {
  const [inputValue, setInputValue] = useState("");
  
    const { copy, isCopied, error } =
      useClipboard(inputValue);
  
  return (
    <div className="m-4">
      <div>
        <p>First custom hook: clipboard</p>
        {/* 1 Text input for copying */}
        <div>
          <p>Input: </p>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-gray-200 rounded-2xl p-2 text-black"></textarea>
        </div>

        {/* 2 Copy functionality */}
        <button onClick={copy}>
          {isCopied ? "✅ text copied" : "📋 copy text"}
        </button>

        {error && (
          <p style={{ color: "red" }}>
            Fehler beim Kopieren: {error.message}
          </p>
        )}
        <div className="my-4" />

        {/* 3 fill in copied clipboard text here*/}
        <div>
          <p>
            Output (please add copied clipboard text here):{" "}
          </p>
          <textarea className="bg-green-200 text-black rounded-2xl p-2"></textarea>
        </div>
      </div>
      <hr className="" />
      <div>
        <p>Second custom hook: local storage </p>
        <UserSettings />
      </div>
      <div>
        <p>Third custom hook: click outside</p>
        <DropDownComponent />
      </div>
    </div>
  );
}

