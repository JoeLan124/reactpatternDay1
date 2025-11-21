// src/types/post.ts oder direkt in der Datei, wo es benötigt wird
import Input from "@/app/components/Input"

export type Post = {
  id: string;
  title: string;
  content: string;
};

async function getPosts<POST>() {
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

export default async function PostsPage() {
  const posts:Post[] = await getPosts<Post[]>();

  return (
    <main>
      <h1>Meine Blog Posts</h1>
      <Input/>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </main>
  );
}
