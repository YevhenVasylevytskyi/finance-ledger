import { useState } from 'react';
import { Link } from 'react-scroll';
import headerLinks from './headerLinks';

import icons from '../../assets/sprite.svg';
import styles from './Header.module.css';

function Header() {
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
          <svg className={styles.logoSvg} width='40' height='35'>
            <use href={`${icons}#logo`} />
          </svg>
          <span className={styles.logoTitle}>Finance 
            <span className={styles.logoText}> Ledger</span>
          </span>
        </span>
      </Link>     
      
      <ul className={styles.list}>
        {headerLinks.map((item) => {
          return <li key={item.url} className={styles.item}>
            <Link
              to={item.url}
              smooth={true}
              className={styles.itemLink}
            >
              {item.title}
            </Link>
					</li>
        })}        
        </ul>
    </header>
  );
}

export default Header;