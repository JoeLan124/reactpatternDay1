"use client"

import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

export function ThemeDisplay() {
  const { theme, toggleTheme } = useTheme();

  console.log("ThemeDisplay rendered");

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold mb-2">Theme Context</h3>
      <p>Current theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="mt-2 px-3 py-1 bg-purple-500 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}
