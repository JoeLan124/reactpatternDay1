"use client"

import { useState } from "react"

const Tab = ({ children }) => {
  return (
    <div>{ children}</div>
  )
}

export default Tab


const TabHeader = ({ header }) => {
  const [isActiveTab, setActiveTab] = useState(0)

  const handleClick = (index) => {
    setActiveTab(index)
}

  return (
    <div className="flex justify-center items-center">
      {header.map((head, index) => {
        return (
          <ul className={`m-2 text-white p-2 border-x-1 ${isActiveTab===index?bg-gray-300:""}`} onClick={() =>handleClick(index)} key={index}>{head}</ul>)
      })}
  
  </div>)
}

const TabContent = ({content}) => {
  return (
    <div>{ content}</div>
  )
}

Tab.Content = TabContent
Tab.Header = TabHeader