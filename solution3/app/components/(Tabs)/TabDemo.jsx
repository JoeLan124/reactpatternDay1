import Tab, { TabHeader, TabContent } from "./Tab"

const TabDemo = () => {

  const tabData = {
    "name": "nameText1",
    "address": "addresstext",
    "phone": "phonetext",
    "age": 9,
  }



  return (
    <Tab tabData={tabData}/>

  );
}
export default TabDemo