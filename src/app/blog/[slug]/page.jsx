import styles from "./singlePost.module.css";
import Image from "next/image";
import UserPost from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

export const generateMetadata = async ({params }) => {
  const { slug } = params; 

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
  }


// FETCH DATA WITH API
// const getData = async (slug) => {
//   // use cache no-store for more frequent updates
//   // next: {revalidate: 3600} to revalidate every hour
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache: "no-store"});
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//     return res.json();
//   }

const SinglePostPage = async ({params}) => {

// FETCH DATA WITH API
  // const {slug} = params;
  // const post = await getData(slug);

  // FETCH DATA WITHOUT API
  const post = await getPost(params.slug)

  

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post.img}
          alt=""
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
        {post && (
          <Suspense fallback={<div>Loading...</div>}>
         <UserPost userId= {post.userId} />
         </Suspense>)}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
