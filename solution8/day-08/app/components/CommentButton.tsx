"use client"

const CommentButton = () => {
  return (
    <button onClick={() => console.log("first") }
        className="bg-blue-200 p-2 rounded-2xl mx-4" 
        type="submit"

      >
      Submit
      </button>
      
  )
}
export default CommentButton