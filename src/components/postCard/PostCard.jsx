import Image from 'next/image';
import Link from 'next/link';
import styles from './postCard.module.css';


const PostCard = () => {
  return (
   <div className={styles.container}>
    <div className={styles.top}>
        <div className={styles.imgContainer}>
            <Image src='https://images.pexels.com/photos/14983436/pexels-photo-14983436/free-photo-of-church-roof-with-a-cross-on-top.jpeg' alt='' fill className={styles.img}/>

        </div>
        <span className={styles.date}>01.01.2024</span>
    </div>
    <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Description</p>
        <Link href='/blog/post' className={styles.link}>Read More</Link>
    </div>
   </div>
  )

}

export default PostCard