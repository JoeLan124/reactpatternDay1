import type { Post } from "../page";

const PostList = ({ posts }:{posts: Post[]}) => {
  return (
    <main>

      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          {/* <p>{post.content}</p> */}
        </article>
      ))}
    </main>
  );
}
export default PostList