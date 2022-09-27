import { useState } from 'react';
import { Link } from 'react-scroll';

import icons from '../../assets/sprite.svg';
import styles from './Header.module.css';

function Header({headerLinks}) {
  const [navbar, setNavbar] = useState(false)

  const changeBacground = () => {
    if (window.scrollY >= 120 && window.visualViewport.width < 768) {
        setNavbar(true)
    }
    else if (window.scrollY >= 70 && window.visualViewport.width > 768) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBacground)

  const navBg = navbar ? styles.active : styles.header

  return (    
    <header className={navBg}>        
      <Link
        to={'home'}
        smooth={true}
        className={styles.logoLink}
      >
        <span className={styles.logo}>
          <svg className={styles.logoSvg} width="40" height="35">
            <use href={`${icons}#logo`} />
          </svg>
          <span className={styles.logoTitle}>Finance 
            <span className={styles.logoText}> Ledger</span>
          </span>
        </span>
      </Link>     
      
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            to={'home'}
            smooth={true}
            className={styles.itemLink}>
            Home
          </Link>
					</li>
					<li className={styles.item}>
          <Link
            to={'about'}
            smooth={true}
            className={styles.itemLink}>
            About
          </Link>
					</li>
					<li className={styles.item}>
          <Link
            to={'cases'}
            smooth={true}
            className={styles.itemLink}>
            Cases
          </Link>
					</li>
					<li className={styles.item}>
          <Link
            to={'blog'}
            smooth={true}
            className={styles.itemLink}>
            Blog
          </Link>
					</li>
					<li className={styles.item}>
          <Link
            to={'contact'}
            smooth={true}
            className={styles.itemLink}>
            Contact
          </Link>
					</li>
        </ul>
    </header>
  );
}

export default Header;