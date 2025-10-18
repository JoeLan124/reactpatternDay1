const Tab = ({ children}) => {
  return (
    <div>{ children}</div>
  )
}

export default Tab


const TabHeader = ({header}) => {
  return (
    <div>
      {header.map((head, index) => {
        return(
          <ul className="m-2 text-white" key={index}>{head}</ul>)
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