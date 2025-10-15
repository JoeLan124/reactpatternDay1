import ImageCard from "./ImageCard";

const MessyImageCard = ({ title, description, height, width, children, imageUrl}) => {
  return (
    <div>
      <p1>{title}</p1>
        <div>
            <ImageCard imageUrl={imageUrl} description={description} width={width} height={height}/>
        </div>
      </div>

  );
}
export default MessyImageCard