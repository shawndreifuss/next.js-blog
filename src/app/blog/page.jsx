import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
// FETCH DATA WITH AN API
// const getData = async () => {
  // use cache no-store for more frequent updates
  // next: {revalidate: 3600} to revalidate every hour
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 3600}});
  // if (!res.ok) {
  //   throw new Error("Something went wrong");
  // }
  //   return res.json();
  
  // }


const BlogPage = async () => {

// const posts = await getData();

// FETCH DATA WITHOUT API
const posts = await getPosts();


  return (
    <div className={styles.container}>
    {posts.map((post) => (
      <div className={styles.post} key={post.id}>
        <PostCard post={post} />
      </div>
    ))}
  </div>
);
};


export default BlogPage;
