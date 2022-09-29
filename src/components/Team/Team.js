import teams from './teamArr/teamArr'
import TeamItem from './TeamItem/TeamItem'
import socialIconsArr from '../Social/socialIcons/socialIconsArr';

import styles from './Team.module.css';
import icons from '../../assets/sprite.svg'

function Team() {

  // const { socialLink } = teams
  


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
            <TeamItem
              key={team.name}
              team={team}
              styles={styles}
              socialIconsArr={team.socialLink}
               />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Team;