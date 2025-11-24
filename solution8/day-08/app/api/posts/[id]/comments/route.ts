import { NextRequest, NextResponse } from 'next/server';

export type Comment = {
  id: string;
  content: string;
  createdAt: string;
};

// Mock data for comments - in a real app this would be a database
const comments: Record<string, Comment[]> = {
  "1": [
    { id: "1", content: "Great post!", createdAt: new Date().toISOString() },
    { id: "2", content: "I learned a lot from this.", createdAt: new Date().toISOString() }
  ],
  "2": [
    { id: "3", content: "Interesting perspective.", createdAt: new Date().toISOString() }
  ]
};

// GET /api/posts/[id]/comments
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const postId = params.id;
    const postComments = comments[postId] || [];
    return NextResponse.json(postComments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }
}

// POST /api/posts/[id]/comments
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const postId = params.id;
    const { content } = await request.json();
    
    if (!content) {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      content,
      createdAt: new Date().toISOString()
    };

    // Initialize comments array for post if it doesn't exist
    if (!comments[postId]) {
      comments[postId] = [];
    }

    comments[postId] = [newComment, ...comments[postId]];
    
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create comment" }, { status: 500 });
  }
}