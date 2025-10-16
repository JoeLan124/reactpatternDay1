import MessyImageCard from "./MessyImageCard"

const MesseImageCardDemo = () => {
  return (
    <MessyImageCard imageUrl="/vercel.svg" description={"My Next Project"} title="ACTION TITLE" width={200} height={200} footer="Nice image" visible={true} buttontext="click me" className={"bg-green-200"} buttonVisible={true}/>
  )
}
export default MesseImageCardDemo

