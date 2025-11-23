import type { Post } from "../page";

const PostList = ({ posts }:{posts: Post[]}) => {
  return (
    <main>
      <h1>Meine Blog PostList</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </main>
  );
}
export default PostList