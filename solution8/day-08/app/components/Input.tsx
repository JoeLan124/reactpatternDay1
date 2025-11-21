"use client"
import { useState, FormEvent } from "react"


const Input = () => {
  const [newComment, setNewComment] = useState("")
  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("first")
  }
  return (
    <form  onSubmit={handleSubmit}>
    <div className="flex justify-between items-center h-24 text-black gap-2 m-4 bg-amber-800 p-2">
      <div className="flex  items-center w-full">

      <label className="text-white pr-4">Comment</label>

      <input
        className="bg-blue-100 rounded-3xl p-3 w-full"
        name="comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
          />
  

      </div>
      <button type="submit">Submit</button>
      </div>
      </form>
  );
}
export default Input