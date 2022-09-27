import styles from './Footer.module.css';
import icons from '../../assets/sprite.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <a
          href='https://www.facebook.com/evgeniy.vasilevitskiy'
          className={styles.socialLink}>
          <svg className={styles.socialIcon}>
            <use href={`${icons}#facebook`}></use>
          </svg>
        </a>
        <a
          href='https://twitter.com/SpiritUa87'
          className={styles.socialLink}>
          <svg className={styles.socialIcon}>
            <use href={`${icons}#twitter`}></use>
          </svg>
        </a>
        <a
          href='https://www.youtube.com/'
          className={styles.socialLink}>
          <svg className={styles.socialIcon}>
            <use href={`${icons}#youtube`}></use>
          </svg>
        </a>
        <a
          href='https://www.linkedin.com/in/yevhen-vasylevytskyi-727373212/'
          className={styles.socialLink}>
          <svg className={styles.socialIcon}>
            <use href={`${icons}#linkedin`}></use>
          </svg>
        </a>
        
      </div>
      <p className={styles.footerText}>
        Copyright © 2021 - FinanceLedger
      </p>
        </footer>
  );
}

export default Footer;