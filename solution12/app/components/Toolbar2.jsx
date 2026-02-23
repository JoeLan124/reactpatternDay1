"use client"
import { useState } from "react";

const Toolbar2 = ({ start, center, end }) => {

    const [isOverflowOpen, setIsOverflowOpen] = useState(false);

    return (
      <div className="flex justify-between bg-gray-500 w-full h-24 p-4">
        <div>{start}</div>
        <div className="hidden md:flex bg-amber-200/50  h-8 text-black px-4  items-center justify-center">
          {center}
        </div>
        <div className="md:hidden flex flex-col-2 h-18 items-end w-full">
          {isOverflowOpen && (
            <div className="flex bg-amber-200/50 h-8 text-black px-4  items-center justify-center">
              {center}
            </div>
          )}
        </div>
        <div className="absolute right-24">{end}</div>
        <div>
          <button
            className="md:hidden"
            onClick={() =>
              setIsOverflowOpen(!isOverflowOpen)
            }>
            button
          </button>
        </div>
      </div>
    );
};
export default Toolbar2