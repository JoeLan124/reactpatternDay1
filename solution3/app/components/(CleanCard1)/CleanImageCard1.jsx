


const CleanImageCard1 = ({children}) => {
  return <div className="flex justify-center items-center bg-white shadow-2xl text-black w-96 m-4 rounded-2xl shadow-amber-500">{children }</div>
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

const CleanImageCard1Body = ({ children }) => {
  return (
    <div className="flex justify-center items-center m-4 bg-amber-200 rounded-2xl size-36">
      <div>{children}</div>
    </div>
  );
};

const CleanImageCard1Footer = ({ children}) => {
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

