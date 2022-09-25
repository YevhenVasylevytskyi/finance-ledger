import styles from './Hero.module.css';
import icons from '../../assets/sprite.svg'

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>The Sky Is The Limit</h1>
      <p className={styles.heroText}>We provide world class financial assistance</p>
      <button type="button" className={styles.heroButton}>
            <svg className={styles.iconButton} width="9" height="18">
                <use href={`${icons}#arrow`}></use>
            </svg>
            Read More
        </button>

    </div>
  );
}

export default Hero;