import { useState } from 'react'
import { NavLink } from "react-router-dom";

import icons from '../../assets/sprite.svg'
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
      <NavLink className={styles.logoLink}>
        <span className={styles.logo}>
          <svg className={styles.logoSvg} width="40" height="35">
            <use href={`${icons}#logo`} />
          </svg>
          <span className={styles.logoTitle}>Finance 
            <span className={styles.logoText}> Ledger</span>
          </span>
        </span>
      </NavLink>     
      
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            className={styles.itemLink}
            link='#home'>
            Home
          </NavLink>
					</li>
					<li className={styles.item}>
          <NavLink
            className={styles.itemLink}
            link='#about'>
            About
          </NavLink>
					</li>
					<li className={styles.item}>
          <NavLink
            className={styles.itemLink}
            link='#cases'>
            Cases
          </NavLink>
					</li>
					<li className={styles.item}>
          <NavLink
            className={styles.itemLink}
            link='#blog'>
            Blog
          </NavLink>
					</li>
					<li className={styles.item}>
          <NavLink
            className={styles.itemLink}
            link='#contact'>
            Contact
          </NavLink>
					</li>
        </ul>
    </header>
  );
}

export default Header;