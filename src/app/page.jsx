import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Projects.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <Link href="/blog">
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button  className={styles.button}>Blogs</button>
        </div>
        </Link>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/images/earth.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
