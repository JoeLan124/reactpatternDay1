import { NextRequest, NextResponse } from 'next/server';

export type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

// Mock data - in a real app this would be a database
const initialPosts: Post[] = [
  { id: "1", title: "Welcome Post", content: "This is the first post!", createdAt: new Date().toISOString() },
  { id: "2", title: "Second Post", content: "This is another post.", createdAt: new Date().toISOString() }
];

let posts = [...initialPosts];

// GET /api/posts
export async function GET() {
  try {
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

// POST /api/posts
export async function POST(request: NextRequest) {
  try {
    const { title, content } = await request.json();
    
    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    const newPost: Post = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString()
    };

    posts = [newPost, ...posts]; // Create new array instead of mutating
    
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}