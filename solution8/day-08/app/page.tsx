"use client"
import { useEffect, useState } from "react"
import PostList from "./components/PostList"

export type Post = {
  id: string;
  title: string;
  content: string;
};

export type Comment = {
  id: string;
  content: string;
  createdAt: string;
  postId: string;
  status?: 'sending' | 'sent';
};

// Mock posts data
const mockPosts: Post[] = [
  { id: "1", title: "Welcome Post", content: "This is the first post!" },
  { id: "2", title: "Second Post", content: "This is another post." }
];

const LandingPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulate fetching posts with delay
    const fetchPosts = async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      
      setPosts(mockPosts);
    };
    
    fetchPosts();
  }, [])

  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}
export default LandingPage

