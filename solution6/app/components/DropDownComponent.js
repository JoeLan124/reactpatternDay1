"use client"

import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside"

function DropdownComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    if (isOpen) {
      setIsOpen(false);
      console.log(
        "close dropdown when click is outside"
      );
    }
  };

  useClickOutside(dropdownRef, closeDropdown);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="bg-green-600 rounded-4xl p-2 my-2">
        {isOpen ? "close" : "open"}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="bg-amber-400 rounded-2xl p-4 text-black">
          <h4>Dropdown Content </h4>
          <p>
            Click outside to close me!
          </p>
        </div>
      )}
    </div>
  );
}

export default DropdownComponent;
