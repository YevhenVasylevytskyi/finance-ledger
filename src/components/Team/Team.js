import teams from '../../assets/images/team/personImagesArr'
import styles from './Team.module.css';
import icons from '../../assets/sprite.svg'

function Team() {

  return (
    <section className={styles.team} id='team'>
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
                  <source srcSet={`${team.webp1x} 1x, ${team.webp2x} 2x`}
                  // media='(minWidth: 1360px)'
                  type="image/webp"/>
                <source srcSet={`${team.jpg1x} 1x, ${team.jpg2x} 2x`}
                  // media='(minWidth: 1360px)'
                  type="image/jpg"/>
                  <img className={styles.teamImg} src={team.jpg1x} alt={team.alt} />
                </picture>
                <ul className={styles.teamIconList}>                  
                  {/* {socialIconsArr.map((item) => (
                    <SocialItem item={item} key={item.icon_id} />
                  ))} */}
                </ul>
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