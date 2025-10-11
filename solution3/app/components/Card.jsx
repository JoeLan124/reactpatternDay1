function Card({ children }) {
  return (
    <div className="bg-white text-black rounded-2xl p-6">
      {children}
    </div>
  );
}

 


function CardHeader({ title, children, className }) {
    return (
        <div className={`mb-4 border-1 border-gray-100 rounded-3xl p-4 shadow-2xl ${className}`} >
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="text-sm">
                {children}
        </div>
    </div>
  );
}



function CardBody({ children }) {
  return <div className="mb-4 pl-6">{children}</div>;
}


function CardFooter ({children })  {
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