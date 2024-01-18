import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

// FETCH DATA WITH API
// const getData = async (user) => {
//         // use cache no-store for more frequent updates
//         // next: {revalidate: 3600} to revalidate every hour
//         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

//         if (!res.ok) {
//           throw new Error("Something went wrong");
//         }
//           return res.json();
//     }

const PostUser = async ({ userId }) => {
  // FETCH DATA WITH API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        width={50}
        height={50}
        className={styles.avatar} 
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
      />
      <div className={styles.text}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
