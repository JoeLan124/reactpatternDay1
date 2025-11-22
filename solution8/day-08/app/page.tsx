"use client"
import { useState } from "react"
import Input from "./components/InputForm"


const LandingPage = () => {
const [comments, setComments] = useState<string[]>([])

  return (
    <div>
      <Input setComments={setComments}  />
      {comments}
    </div>
  )
}
export default LandingPage

