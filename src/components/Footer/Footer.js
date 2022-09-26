import styles from './Footer.module.css';
import icons from '../../assets/sprite.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <svg className={styles.socialIcon}>
          <use href={`${icons}#facebook`}></use>
        </svg>
        <svg className={styles.socialIcon}>
          <use href={`${icons}#twitter`}></use>
        </svg>
        <svg className={styles.socialIcon}>
          <use href={`${icons}#youtube`}></use>
        </svg>
        <svg className={styles.socialIcon}>
          <use href={`${icons}#linkedin`}></use>
        </svg>
        
      </div>
      <p className={styles.footerText}>
        Copyright © 2021 - FinanceLedger
      </p>
        </footer>
  );
}

export default Footer;