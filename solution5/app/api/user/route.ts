import { NextResponse } from 'next/server';

type User = {
    user: string,
    role?: string
}

const users = [
    { "user": "johnny", role: "admin" },
{ "user": "jeanne", role: "report" },
{ "user": "jack"}
] 

export async function GET() {
    const userCount = users.length;
    const randomInt0ToLength = Math.floor(Math.random() * userCount);

    return NextResponse.json({ 
  
        user: users[randomInt0ToLength] 
    });
}
