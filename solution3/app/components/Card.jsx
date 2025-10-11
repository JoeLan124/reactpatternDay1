function Card ({ children})  {
  return (
      <div className="bg-white rounded-2xl  text-blue-700 h-34 w-1/2">
          {children}
    </div>
  )
}

function CardHeader({ title, children }) {
    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
}

function CardBody ({ children})  {
    return (
        <div>
            {children}
        </div>
    )
}

function CardFooter ({children })  {
    return (
        <div>
            {children}
        </div>
    
    )
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

// Attach subcomponents


export default Card