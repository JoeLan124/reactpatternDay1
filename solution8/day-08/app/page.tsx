"use client"

// src/types/post.ts oder direkt in der Datei, wo es benötigt wird
import Input from "@/app/components/Input"
import { useState, useOptimistic, startTransition, useEffect } from "react"

export type Post = {
  id: string;
  title: string;
  content: string;
  isOptimistic?: boolean;
  tempId?: string;
};

type Toast = {
  id: string;
  message: string;
  type: 'error' | 'success';
};

async function getPosts<POST>() {
  const res = await fetch(
    "/api/posts",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

async function addComment(content: string): Promise<Post> {
  // Simulate 50% success rate for testing
  if (Math.random() < 0.5) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "New Comment", content })
    });
    
    if (!res.ok) throw new Error("Failed to add comment");
    return res.json();
  } else {
    // Simulate 50% failure
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    throw new Error("Random server error - please try again!");
  }
}

function ToastNotification({ toast, onDismiss }: { toast: Toast; onDismiss: (id: string) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(toast.id), 5000);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white z-50 ${
      toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'
    }`}>
      <div className="flex items-center justify-between">
        <span>{toast.message}</span>
        <button 
          onClick={() => onDismiss(toast.id)}
          className="ml-4 text-white hover:text-gray-200"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Load posts on mount, preserving optimistic posts
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const serverPosts = await getPosts<Post[]>();
        setPosts(prev => {
          // Merge server posts with any existing optimistic posts
          const optimisticPosts = prev.filter(p => p.isOptimistic);
          return [...serverPosts, ...optimisticPosts];
        });
      } catch (error) {
        console.error("Failed to fetch posts");
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  function addToast(message: string, type: 'error' | 'success') {
    const id = `toast-${Date.now()}`;
    setToasts(prev => [...prev, { id, message, type }]);
  }

  function removeToast(id: string) {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }

  // Optimistic state management - optimisticPosts will include both base posts and optimistic ones
  const [optimisticPosts, addOptimisticPost] = useOptimistic(posts, (state, newPost: Post) => [
    ...state,
    { ...newPost, isOptimistic: true, tempId: `temp-${Date.now()}` }
  ]);

  async function handleAddComment(content: string) {
    const tempId = `temp-${Date.now()}`;
    
    try {
      // Create optimistic post
      const optimisticPost: Post = {
        id: tempId,
        title: "Sending...",
        content,
        isOptimistic: true,
        tempId
      };

      // Add optimistic post to base state immediately (this is what persists)
      setPosts(prev => [...prev, optimisticPost]);

      // Send to server
      const serverPost = await addComment(content);
      
      // Create real post and update base state (replacing the optimistic one)
      setPosts(prev => prev.map(p => 
        p.tempId === tempId 
          ? { ...serverPost, isOptimistic: false } // Replace with real server data
          : p
      ));

      addToast("Comment added successfully!", "success");
    } catch (error) {
      // Remove optimistic post on error from base state
      setPosts(prev => prev.filter(p => !p.tempId || !p.content.includes(content)));
      console.error("Failed to add comment:", error);
      addToast("Failed to add comment. Please try again.", "error");
    }
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      <h1>Meine Blog Posts</h1>
      <Input onSubmitComment={handleAddComment}/>
      {optimisticPosts.map((post) => (
        <article key={post.tempId || post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.isOptimistic && <span className="text-blue-500">Sending...</span>}
        </article>
      ))}

      {/* Toast notifications */}
      {toasts.map(toast => (
        <ToastNotification
          key={toast.id}
          toast={toast}
          onDismiss={removeToast}
        />
      ))}
    </main>
  );
}
