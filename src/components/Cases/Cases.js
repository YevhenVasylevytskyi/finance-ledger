import styles from './Cases.module.css';
// import cases from '../../assets/images/about/people.jpg'
// import img from '../../assets/images/cases/'
import cases1Jpg from '../../assets/images/cases/cases1.jpg'
import cases2Jpg from '../../assets/images/cases/cases2.jpg'
import cases3Jpg from '../../assets/images/cases/cases3.jpg'
import cases4Jpg from '../../assets/images/cases/cases4.jpg'
import cases5Jpg from '../../assets/images/cases/cases5.jpg'
import cases6Jpg from '../../assets/images/cases/cases6.jpg'

function Cases() {

  const images = [
    {
      src: cases1Jpg,
      alt: "cases"
    },
    {
      src: cases2Jpg,
      alt: "cases"
    },
    {
      src: cases3Jpg,
      alt: "cases"
    },
    {
      src: cases4Jpg,
      alt: "cases"
    },
    {
      src: cases5Jpg,
      alt: "cases"
    },
        {
      src: cases6Jpg,
      alt: "cases"
    }
  ] 

  return (
    <section className={styles.cases} id="cases">
      <div className={styles.casesContainer}>
        <div>
          <p className={styles.casesSubtitle}>This is what we do</p>
          <h2 className={styles.casesTitle}>Business Cases</h2>
          <p className={styles.casesText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
        </div>
        <ul className={styles.casesList}>
          {images.map((image) => (
            <li
              className={styles.casesItem}
            >
              <picture>
                <img className={styles.casesImg} src={image.src} alt={image.alt} />
              </picture>
            </li>
          ))}
        </ul>        
      </div>      
    </section>
  );
}

export default Cases;