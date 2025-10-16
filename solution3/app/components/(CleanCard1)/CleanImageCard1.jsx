import CleanImageCard2Demo from "../(CleanCard2)/CleanImageCard2Demo";


const CleanImageCard1 = ({children}) => {
  return <div>{children }</div>
}

const CleanImageCardTitle = ({title, description, children, className}) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <div>{children}</div>
    </div>
  )
}

const CleanImageCardBody = ({ title, description, children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

const CleanImageCardFooter = ({ title, description , children}) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

CleanImageCard1.Title = CleanImageCardTitle;
CleanImageCard1.Body = CleanImageCardBody;
CleanImageCard1.Footer = CleanImageCardFooter;


export default CleanImageCard1

