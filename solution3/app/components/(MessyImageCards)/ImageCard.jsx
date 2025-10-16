import Image from "next/image";

const ImageCard = ({
  description,
  height,
  width,
  imageUrl,
className

}) => {
  return <div><Image alt={description} height={height} width={width} className={`${className}`}  priority src={imageUrl || ""} as="image"/></div>;
};
export default ImageCard;
