import ImageCard from "./ImageCard";

const MessyImageCard = ({ title, description, height, width,  footer, imageUrl, visible, className, buttontext, buttonVisible}) => {
  return (
    <div>
      <p1>{title}</p1>
        <div>
        {visible && <ImageCard imageUrl={imageUrl} description={description} width={width} height={height} className={`${className}` } />}
      </div>
      {buttonVisible && <button className="bg-red-200 h-24 w-96 rounded-2xl m-2 text-black">{buttontext}</button>}
      <h2>{ footer}</h2>
      </div>

  );
}
export default MessyImageCard