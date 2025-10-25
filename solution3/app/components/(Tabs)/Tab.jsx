"use client"

import { useState } from "react"

const Tab = ({ children, tabData }) => {
  const header = Object.keys(tabData);
  const content = Object.values(tabData);

  const [isActiveTab, setActiveTab] = useState(0);
    const handleClick = (index) => {
      setActiveTab(index);
    };
  return (
    <div className="m-2">
      <TabBody onTabClick={handleClick} header={header} isActiveTab={isActiveTab} content={content} />

      {children}
    </div>
  )
}


const TabBody = ({ header, onTabClick, isActiveTab, content, children }) => {
  const contentText = content[isActiveTab]
  return (
    <div className="flex flex-col ">
      <div className="flex">
        {header.map((head, index) => {
          return (
            <ul
              className={`mt-2 p-3 rounded-t-xl text-gray-500 ${
                isActiveTab === index
                  ? " bg-gray-600 text-white"
                  : ""
              }`}
              onClick={() => onTabClick(index)}
              key={index}>
              {head}
            </ul>
          );
        })}
      </div>
      <div className="flex justify-center  h-48 bg-gray-600 rounded-r-xl rounded-b-xl mx-auto w-full">
        <div className="flex justify-center items-center">
          <p>{contentText}</p>
          {children}
        </div>
      </div>
    </div>
  );
}





export default Tab;
