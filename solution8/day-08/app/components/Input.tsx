"use client"
import { useState } from "react"

const Input = () => {
    const [newComment, setNewCommet] = useState("")
  return (
    <div className="flex  h-12 text-black gap-2 m-4">
      <label className="text-white">Name</label>

      <input
        className="bg-amber-400 rounded-3xl p-3"
        name="comment"
        value={newComment}
        onChange={(e) => setNewCommet(e.target.value)}
      />
      <div className="text-white">

      {newComment}
      </div>
    </div>
  );
}
export default Input