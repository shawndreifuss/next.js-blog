import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>lShawnDreifuss</div>
      <div className={styles.text}>
        ShawnDreifuss © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
