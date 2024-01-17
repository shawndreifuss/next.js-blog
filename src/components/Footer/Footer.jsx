import styles from './footer.module.css'

const Footer = () => {
  return (
   <div className={styles.container}>
    <div className={styles.logo}>Shawn Dreifuss</div>
    <div className={styles.text}>
      Creative thoughts blog shawndreifuss.
    </div>
   </div>
  )
}

export default Footer