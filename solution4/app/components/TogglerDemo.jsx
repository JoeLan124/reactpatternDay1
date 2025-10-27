"use client"

import { useState } from "react"
import Toggler from "./Toggler"

const TogglerDemo = () => {

    const [visible, setVisible] = useState(true)
    return (
      <div className="m-4 space-y-3">
        <button
          className="bg-white text-black p-3 rounded-2xl"
          onClick={() => setVisible(!visible)}>
          Toogle child element
        </button>
        <Toggler visible={visible} className="rounded-2xl m-4">
          <p>This is the child element</p>
        </Toggler>
      </div>
    );
}
export default TogglerDemo