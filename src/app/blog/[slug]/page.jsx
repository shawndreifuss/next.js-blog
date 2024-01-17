import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19264582/pexels-photo-19264582/free-photo-of-ornamented-wall-of-church.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image width={50} height={50} className={styles.avatar} src="/noavatar.png" alt=""  />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Shawn Dreifuss</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>Random Sentences of randomness</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
