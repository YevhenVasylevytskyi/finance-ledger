import styles from './Team.module.css';
import person1Jpg from '../../assets/images/team/person1.jpg'
import person2Jpg from '../../assets/images/team/person2.jpg'
import person3Jpg from '../../assets/images/team/person3.jpg'

function Team() {

  const teams = [
    {
      src: person1Jpg,
      alt: "cases",
      name: "John Doe",
      position: "President"

    },
    {
      src: person2Jpg,
      alt: "cases",
      name: "Jane Doe",
      position: "Vice President"

    },
    {
      src: person3Jpg,
      alt: "cases",
      name: "Steve Smith",
      position: "Marketing Head"

    }    
  ] 
  return (
    <section className={styles.team} id="team">
    <div className={styles.rest}>
      <div>
            <p className={styles.teamSubtitle}>Who we are</p>
            <h2 className={styles.teamTitle}>Our Professional Team</h2>
            <p className={styles.teamText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
        </div>
      <ul className={styles.teamList}>
          {teams.map((team) => (
            <li
              key={team.name}
              className={styles.teamItem}
            >
              <div className={styles.teamWrapper}>
                <picture>
                  <img className={styles.teamImg} src={team.src} alt={team.alt} />
                </picture>
                <div className={styles.description}>
                        <h3 className={styles.name}>{team.name}</h3>
                        <p className={styles.position}>{team.position}</p>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Team;