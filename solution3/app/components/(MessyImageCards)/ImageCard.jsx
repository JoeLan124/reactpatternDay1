import Image from "next/image";

const ImageCard = ({
  description,
  height,
  width,
  imageUrl
}) => {
    return <div><Image alt={description} height={height} width={width} priority src={imageUrl || ""} as="image"/></div>;
};
export default ImageCard;
