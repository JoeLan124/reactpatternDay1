"use client";

import { useState } from "react";

const Toolbar = ({ start, center, end }) => {
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Main toolbar row */}
      <div className="flex items-center justify-between w-full bg-amber-400 text-black px-4 py-3 gap-4">
        {/* Start slot - always visible */}
        <div className="flex items-center shrink-0">
          {start}
        </div>

        {/* Center slot - visible on md and larger screens */}
        <div className="hidden md:flex items-center justify-center flex-1">
          {center}
        </div>

        {/* End slot and overflow toggle */}
        <div className="flex items-center gap-2 shrink-0">
          {/* End slot - always visible */}
          <div className="flex items-center">
            {end}
          </div>

          {/* Overflow menu toggle - visible only on smaller screens */}
          <button
            onClick={() => setIsOverflowOpen(!isOverflowOpen)}
            className="md:hidden p-2 rounded hover:bg-amber-500 transition-colors"
            aria-label="Toggle overflow menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOverflowOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Overflow menu for center content - visible on smaller screens when toggled */}
      {isOverflowOpen && (
        <div className="md:hidden bg-amber-200 text-black px-4 py-3 border-t border-amber-500">
          <div className="text-xs uppercase tracking-wider text-amber-700 mb-2 font-semibold">
            Center Content
          </div>
          <div className="flex items-center justify-center">
            {center}
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
