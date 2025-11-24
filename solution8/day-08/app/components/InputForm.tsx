"use client"
import { useState, FormEvent } from "react"
import CommentButton from "./CommentButton"

import type { Post } from "../page"


interface InputProps {
  setComments: (inp: string[]) => void;
  posts: Post[]

}

const InputForm = ({ setComments, posts }:InputProps) => {
  const [newInput, setNewInput] = useState("")
  const [comm, setCom] = useState<string[]>([])
  

  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComments([...comm, newInput])
    setCom([...comm, newInput]);
    setNewInput("")
  
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex justify-between items-center h-24 text-black gap-2 p-2">
      <div className="flex items-center w-full">
        <label className="text-white pr-4">Comment</label>
        <input
          className="bg-blue-100 rounded-3xl p-3 w-full"
          name="comment"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
          placeholder="Write your new comment..."
        />
      </div>
   <CommentButton/>
    </div>
    </form>
  );
}

export default InputForm