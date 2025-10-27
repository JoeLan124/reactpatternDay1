"use client"

import { useState } from "react"
import Toggler from "./Toggler"

const TogglerDemo = () => {

    const [visible, setVisible] = useState(true)
  return (
      <Toggler onClick={setVisible(!visible)}>
          <p>hallo</p>
      </Toggler>
  )
}
export default TogglerDemo