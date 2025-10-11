const Card = ({ children}) => {
  return (
      <div className="bg-gray-300 rounded-2xl backdrop-blur-3xl text-blue-700 h-34 w-1/2">
          {children}
    </div>
  )
}
const CardHeader = ({title, children}) => {
    return <div>
        <h1>{title }</h1>
        {children}</div>
}

const CardBody = ({ children}) => {
    return <div>
        {children}</div>
}

const CardFooter = ({children }) => {
    return <div>
        {children}</div>;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card