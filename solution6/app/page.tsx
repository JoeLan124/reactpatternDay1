"use client"
import { useState } from "react";
import useClipboard from "@/app/hooks/useClipBoard";

export default function Home ()  {
    const textToCopy =
      "Das ist der Text, der in die Zwischenablage soll.";
    const [inputValue, setInputValue] = useState("");
    const { copy, isCopied, error } =
      useClipboard(inputValue);
  return (
    <div className="m-4">
      <div>
        <p>Input: </p>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-gray-200 rounded-2xl p-2 text-black"></textarea>
      </div>

      {/* Die 'copy'-Funktion direkt an den Button-Klick binden */}
      <button onClick={copy}>
        {isCopied ? "✅ text copied" : "📋 copy text"}
      </button>

      {error && (
        <p style={{ color: "red" }}>
          Fehler beim Kopieren: {error.message}
        </p>
      )}
      <div className="my-4"/>
      <div>
        <p>Output (please add copied clipboard text here): </p>
        <textarea className="bg-green-200 text-black rounded-2xl p-2"></textarea>
      </div>
    </div>
  );
}

