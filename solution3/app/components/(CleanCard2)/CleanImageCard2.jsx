import Image from "next/image"

const CleanImageCard2 = ({ children}) => {
  return (
    <div className="m-2 bg-gray-500 rounded-2xl shadow-2xl shadow-cyan-700 text-cyan-500 p-2">{children}</div>
  )
}
export default CleanImageCard2


const CleanImageCardHeader = ({title }) => {
  return (
    <div className=" p-2">{title }</div>
  )
}

const CleanImageCardImage = ({src, width, height, alt}) => {
  return (
    <Image
      className="rounded-full"
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
}

const CleanImageCardFooter = ({ footerText, children }) => { 
  return (
    <div className="flex justify-start gap-2">
      { children}
    <p className="flex text-center items-center h-16">{footerText}</p>
    </div>
)

}


CleanImageCard2.Header = CleanImageCardHeader
CleanImageCard2.Image = CleanImageCardImage
CleanImageCard2.Footer = CleanImageCardFooter