import SocialLinksList from '../Social/SocialLinksList';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <ul className={styles.footerIconList}>          
          <SocialLinksList styles={styles} />
        </ul>
      </div>
      <p className={styles.footerText}>
        Copyright © 2021 - FinanceLedger
      </p>
        </footer>
  );
}

export default Footer;      