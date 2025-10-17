import CleanImageCard2 from "./CleanImageCard2"
import picture from "@/public/party.png"

const CleanImageCard2Demo = () => {
  return (
    <div>
    <CleanImageCard2>
      <CleanImageCard2.Header title="Action title" />
      <CleanImageCard2.Image src={picture} alt="dance location in barcelona" width="300" height="800"/>
    <CleanImageCard2.Footer footerText="description">
        <button className="bg-cyan-300 text-cyan-800 p-2 m-2 rounded-2xl">Click Me</button>
    </CleanImageCard2.Footer>
    </CleanImageCard2>
    </div>
  )
}
export default CleanImageCard2Demo