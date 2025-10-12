"use client"
import { useState } from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white text-black rounded-2xl p-6">
      {children}
    </div>
  );
}


const CardHeader = ({ title, children, className }) => {

  const [close, setClose] = useState(false)

    return (
      <div className={`mb-4 border-1 border-gray-100 rounded-3xl p-4 shadow-2xl ${className}`} >
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">{title}</h1>
          <p onClick={() => setClose(true)}>x</p>
        </div>
          <div className="text-sm">
                {children}
        </div>
    </div>
  );
}



const CardBody = ({ children }) =>{
  return <div className="mb-4 pl-6">{children}</div>;
}


const CardFooter =  ({children }) => {
    return (
      <div className="mb-4 pl-6">
        <hr className="my-4 text-blue-100" />
        {children}
      </div>
    );
};



Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

// Attach subcomponents


export default Card