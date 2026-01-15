"use client"
import { useState, useEffect, memo, useMemo } from "react";
import { useDebounce } from "../debouncing/hooks/useDebounce";
import { useThrottle } from "../throttling/hooks/useThrottle";

// Dummy user data (10 users)
const DUMMY_USERS = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User" },
  { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Admin" },
  { id: 5, name: "Eve Davis", email: "eve@example.com", role: "User" },
  { id: 6, name: "Frank Miller", email: "frank@example.com", role: "User" },
  { id: 7, name: "Grace Lee", email: "grace@example.com", role: "Admin" },
  { id: 8, name: "Henry Wilson", email: "henry@example.com", role: "User" },
  { id: 9, name: "Ivy Chen", email: "ivy@example.com", role: "User" },
  { id: 10, name: "Jack White", email: "jack@example.com", role: "User" },
];

// Memoized UserItem component for performance optimization
const UserItem = memo(({ user }) => {
  return (
    <div className="border rounded p-3 mb-2 text-black bg-white hover:bg-gray-50 transition-colors">
      <div className="font-semibold">{user.name}</div>
      <div className="text-sm text-gray-600">{user.email}</div>
      <div className="text-xs text-gray-500 mt-1">
        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded">
          {user.role}
        </span>
      </div>
    </div>
  );
});

UserItem.displayName = "UserItem";

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [scrollY, setScrollY] = useState(0);

  // Debounce the search query
  const debouncedQuery = useDebounce(query, 500);

  // Throttle scroll position updates
  const throttledScrollY = useThrottle(scrollY, 100);

  // Filter users based on debounced query using useMemo (correct derived state pattern)
  const filteredUsers = useMemo(() => {
    if (!debouncedQuery) {
      return DUMMY_USERS;
    }
    return DUMMY_USERS.filter(
      (user) =>
        user.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Performance Dashboard
        </h1>

        {/* Search Bar with Debounce */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Search Users (Debounced)</h2>
          <input
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={query}
            placeholder="Search by name or email..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-2">
            Debounced query: {debouncedQuery || "(empty)"}
          </p>
        </div>

        {/* Scroll Tracker with Throttle */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Scroll Position (Throttled)
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-100 ease-out"
                  style={{ width: `${Math.min(throttledScrollY / 10, 100)}%` }}
                />
              </div>
            </div>
            <div className="text-2xl font-mono font-bold text-blue-600 min-w-[80px]">
              {throttledScrollY}px
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Scroll down to see the tracker update smoothly
          </p>
        </div>

        {/* User List with Performance Optimizations */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            User List ({filteredUsers.length} users)
          </h2>
          {filteredUsers.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No users found</p>
          ) : (
            <div className="space-y-2">
              {filteredUsers.map((user) => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>

        {/* Extra content to enable scrolling */}
        <div className="mt-8 space-y-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold">Section {i + 1}</h3>
              <p className="text-gray-600">
                This is placeholder content to enable scrolling and demonstrate
                the throttled scroll tracker.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
