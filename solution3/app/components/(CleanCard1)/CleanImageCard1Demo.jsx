import CleanImageCard1 from "./CleanImageCard1"
import Image from "next/image"

const CleanCardDemo1 = () => {
  return (
    <CleanImageCard1>
      <CleanImageCard1.Title title="Hallo" description="my image" />
      <CleanImageCard1.Body>
        <Image className="bg-red-200" src="next.svg" alt="picture" width="100" height="100" />
      </CleanImageCard1.Body>
      <CleanImageCard1.Footer>
            <p> Footer </p>
      </CleanImageCard1.Footer>
  </CleanImageCard1>
  )
}
export default CleanCardDemo1