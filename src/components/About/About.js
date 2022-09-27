import styles from './About.module.css';

import peopleWebp1x from '../../assets/images/about/people.webp';
import peopleWebp2x from '../../assets/images/about/people@2x.webp';
import peopleJpg1x from '../../assets/images/about/people.jpg';
import peopleJpg2x from '../../assets/images/about/people@2x.jpg';

function About() {
  return (
    <>
    <section className={styles.about} id={'about'}>
        <div className={styles.aboutContainer}>
            <picture>
                <source srcset={`${peopleWebp1x} 1x, ${peopleWebp2x} 2x`}type="image/webp"/>
                <source srcset={`${peopleJpg1x} 1x, ${peopleJpg2x} 2x`}/>
                <img className={styles.aboutImg} src={peopleJpg1x} alt="people" />
            </picture>
            <div className={styles.aboutDescription}>
                <p className={styles.aboutSubtitle}>What you are looking for</p>
                <h2 className={styles.aboutTitle}>We provide bespoke solutions</h2>
                <p className={styles.aboutText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam
                aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                <button type="button" className={styles.aboutBtn}>Read More</button>
            </div>
        </div>
    </section>
    </>
  );
}

export default About;