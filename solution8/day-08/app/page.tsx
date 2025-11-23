"use client"
import { useEffect, useState } from "react"
import Input from "./components/InputForm"
import PostList from "./components/PostList"

export type Post = {
  id: string;
  title: string;
  content: string;
};


const LandingPage = () => {
  const [comments, setComments] = useState<string[]>([])
  const [posts, setPosts] = useState<Post[]>([]); // Add posts state

  async function getPosts(): Promise<Post[]> {
    const res = await fetch(
      "http://localhost:3001/posts/",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return res.json();
  }

  useEffect( () => {
   const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    
    fetchPosts();
  },[]) 

 

  
  return (
    <div>
      <Input setComments={setComments}  />
      {comments}
      <PostList posts={posts} />
    </div>
  )
}
export default LandingPage

