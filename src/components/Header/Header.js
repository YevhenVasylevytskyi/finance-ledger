import { NavLink } from "react-router-dom";

import icons from '../../assets/sprite.svg'
import styles from './Header.module.css';

function Header() {
  return (
    
    <header className={styles.header}>
      
        
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