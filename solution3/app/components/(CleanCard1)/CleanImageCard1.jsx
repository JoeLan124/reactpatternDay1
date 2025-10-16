import CleanImageCard2Demo from "../(CleanCard2)/CleanImageCard2Demo";


const CleanImageCard1 = ({children}) => {
  return <div>{children }</div>
}

const CleanImageCard1Title = ({title, description, children, className}) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <div>{children}</div>
    </div>
  )
}

const CleanImageCard1Body = ({ title, description, children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

const CleanImageCard1Footer = ({ title, description , children}) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

CleanImageCard1.Title = CleanImageCard1Title;
CleanImageCard1.Body = CleanImageCard1Body;
CleanImageCard1.Footer = CleanImageCard1Footer;


export default CleanImageCard1

