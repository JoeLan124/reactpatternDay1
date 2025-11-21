"use client"
import { useState, FormEvent } from "react"


interface InputProps {
  onSubmitComment: (content: string) => Promise<void>;
}

const Input = ({ onSubmitComment }: InputProps) => {
  const [newComment, setNewComment] = useState("")
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!newComment.trim()) return;
    
    try {
      await onSubmitComment(newComment);
      setNewComment(""); // Clear input on success
    } catch (error) {
      console.error("Failed to submit comment:", error);
      // TODO: Show error toast
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex justify-between items-center h-24 text-black gap-2 p-2">
      <div className="flex items-center w-full">
        <label className="text-white pr-4">Comment</label>
        <input
          className="bg-blue-100 rounded-3xl p-3 w-full"
          name="comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
        />
      </div>
      <button 
        className="bg-blue-200 p-2 rounded-2xl mx-4" 
        type="submit"
        disabled={!newComment.trim()}
      >
        Submit
      </button>
    </div>
    </form>
  );
}

export default Input