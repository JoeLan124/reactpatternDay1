// src/types/post.ts oder direkt in der Datei, wo es benötigt wird
import Input from "@/app/components/Input"

export type Post = {
  id: string;
  title: string;
  content: string;
};

async function getPosts<Post>() {
  const res = await fetch(
    "http://localhost:3001/posts/",
    {
      // Standardmäßig cached Next.js 'fetch' Ergebnisse.
      // Mit 'no-store' erzwingst du, dass es bei jeder Anfrage neu geholt wird.
      cache: "no-store",
    }
  );

  if (!res.ok) {
    // Dies löst einen Fehler aus, der von der nearest error.js behandelt wird
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function PostsPage() {
  // Await des Promises direkt im Rendering-Prozess der Komponente.
  const posts = await getPosts<Post>();

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
