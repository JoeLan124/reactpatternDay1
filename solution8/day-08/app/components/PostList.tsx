"use client"
import { useState, useEffect } from "react"
import type { Post, Comment } from "../page"

// Mock data for comments - same structure as API
const mockComments: Record<string, Comment[]> = {
  "1": [
    { id: "1", content: "Great post!", createdAt: new Date().toISOString(), postId: "1" },
    { id: "2", content: "I learned a lot from this.", createdAt: new Date().toISOString(), postId: "1" }
  ],
  "2": [
    { id: "3", content: "Interesting perspective.", createdAt: new Date().toISOString(), postId: "2" }
  ]
};

const PostList = ({ posts }: { posts: Post[] }) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [optimisticComments, setOptimisticComments] = useState<Comment[]>([])
  const [idCounter, setIdCounter] = useState(0)

  useEffect(() => {
    // Simulate fetching comments from server with delay
    const fetchCommentsForPosts = async () => {
      const allComments: Comment[] = [];
      for (const post of posts) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Use mock data instead of API call
        const postComments = mockComments[post.id] || [];
        allComments.push(...postComments);
      }
      setComments(allComments);
    }

    if (posts.length > 0) {
      fetchCommentsForPosts()
    }
  }, [posts])

  const addComment = async (postId: string, content: string) => {
    const optimisticComment: Comment = {
      id: `temp-${idCounter}`,
      content,
      createdAt: new Date().toISOString(),
      postId,
      status: 'sending'
    }

    setIdCounter(prev => prev + 1)
    setOptimisticComments(prev => [...prev, optimisticComment])

    // Simulate server submission with delay
    setTimeout(() => {
      try {
        // Simulate server response
        const newComment: Comment = {
          id: Date.now().toString(),
          content,
          createdAt: new Date().toISOString(),
          postId
        };

        // Update mock data (for consistency, though not necessary for UI)
        if (!mockComments[postId]) {
          mockComments[postId] = [];
        }
        mockComments[postId] = [newComment, ...mockComments[postId]];

        // Add real comment to state
        setComments(prev => [newComment, ...prev])
        // Remove optimistic comment
        setOptimisticComments(prev => prev.filter(comment => comment.id !== optimisticComment.id))
      } catch (error) {
        console.error('Error submitting comment:', error)
        // Remove optimistic comment on error
        setOptimisticComments(prev => prev.filter(comment => comment.id !== optimisticComment.id))
        alert('Failed to submit comment. Please try again.')
      }
    }, 2500) // Increased to 2500ms as requested
  }

  const getCommentsForPost = (postId: string) => {
    const allComments = [...comments, ...optimisticComments]
    return allComments.filter(comment => comment.postId === postId)
  }

  return (
    <main>
      {posts.map((post) => (
        <article key={post.id} className="mb-6 p-4 border rounded">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-600">{post.content}</p>
          
          {/* Comments section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Comments</h3>
            <ul className="list-disc list-inside">
              {getCommentsForPost(post.id).map((comment) => (
                <li key={comment.id} className="text-sm">
                  {comment.content}
                  {comment.status === 'sending' && (
                    <span className="text-blue-500 ml-2">(Sending...)</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Comment form */}
          <form 
            className="mt-4" 
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const content = formData.get('comment') as string
              if (content.trim()) {
                addComment(post.id, content)
                e.currentTarget.reset()
              }
            }}
          >
            <div className="flex gap-2">
              <input
                type="text"
                name="comment"
                placeholder="Write a comment..."
                className="flex-1 p-2 border rounded"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Comment
              </button>
            </div>
          </form>
        </article>
      ))}
    </main>
  )
}

export default PostList