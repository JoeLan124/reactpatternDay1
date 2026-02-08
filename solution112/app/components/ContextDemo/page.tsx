"use client"

import React from "react";
import { UserDisplay } from "./UserDisplay";
import { ThemeDisplay } from "./ThemeDisplay";
import { CartDisplay } from "./CartDisplay";

export default function ContextDemo() {
  console.log("ContextDemo rendered");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Context Split Demo</h2>
      <p className="text-gray-600">
        Each context is separate. Changes to one context won&apos;t re-render consumers of other contexts.
        Check the console to see which components re-render.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <UserDisplay />
        <ThemeDisplay />
        <CartDisplay />
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h3 className="font-bold mb-2">How to test:</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Open browser console (F12)</li>
          <li>Click &quot;Add to Cart&quot; - Only CartDisplay should re-render</li>
          <li>Click &quot;Toggle Theme&quot; - Only ThemeDisplay should re-render</li>
          <li>Click &quot;Login&quot; - Only UserDisplay should re-render</li>
        </ol>
        <p className="mt-2 text-sm text-gray-600">
          Notice how each component only re-renders when its own context changes!
        </p>
      </div>
    </div>
  );
}
