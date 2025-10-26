"use client"
import { useState } from "react";

function Accordion({ children, className }) {
    return <div className={ className}>{children}</div>;
}

function AccordionItem({ title, children, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <button
        className="shadow-lg rounded-2xl p-2 m-2"
        onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && (
        <div className="opacity-60 ml-4">{children}</div>
      )}
    </div>
  );
}

// Attach subcomponents
// Accordion.Item = AccordionItem;

export { AccordionItem }

export default Accordion;
