import Tab, { TabHeader, TabContent } from "./Tab"

const TabDemo = () => {

  const tabData = {
    "name": "nameText1",
    "address": "addresstext",
    "phone": "phonetext"
  }



  return (
    <Tab tabData={ tabData}/>

  );
}
export default TabDemo