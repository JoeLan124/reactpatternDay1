"use client"

import React from "react";
import { useUser } from "../../contexts/UserContext";

export function UserDisplay() {
  const { user, setUser } = useUser();

  console.log("UserDisplay rendered");

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold mb-2">User Context</h3>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button
            onClick={() => setUser(null)}
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => setUser({ name: "John Doe", email: "john@example.com" })}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      )}
    </div>
  );
}
