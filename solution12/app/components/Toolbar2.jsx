"use client"
import { useState } from "react";

const Toolbar2 = ({ start, center, end }) => {

    const [isOverflowOpen, setIsOverflowOpen] = useState(false);

    return (
      <div className="flex justify-between items-center bg-slate-800 w-full h-16 px-4 relative">
        <div className="flex items-center">{start}</div>
        <div className="hidden md:flex bg-slate-700/80 rounded-lg h-10 text-white px-4 items-center justify-center gap-2">
          {center}
        </div>
        <div className="hidden md:flex items-center">{end}</div>
        
        {/* Mobile overflow menu */}
        <div className="md:hidden flex items-center gap-2">
          <div>{end}</div>
          <button
            className="p-2 text-white hover:bg-slate-700 rounded-lg transition-colors"
            onClick={() => setIsOverflowOpen(!isOverflowOpen)}
          >
            {isOverflowOpen ? "✕" : "☰"}
          </button>
        </div>
        
        {/* Mobile dropdown */}
        {isOverflowOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-slate-700 p-4 flex flex-col gap-2">
            <div className="flex flex-col gap-2 text-white">
              {center}
            </div>
          </div>
        )}
      </div>
    );
};
export default Toolbar2