import SocialLinksList from '../../Social/SocialLinksList/SocialLinksList';

function TeamItem({ team, styles, socialIconsArr }) {

    return (
        <li className={styles.teamItem}>
            <div className={styles.teamWrapper}>
                <div className={styles.teamOwerlay}>
                    <picture>
                        <source srcSet={`${team.webp1x} 1x, ${team.webp2x} 2x`}     type="image/webp"/>
                        <source srcSet={`${team.jpg1x} 1x, ${team.jpg2x} 2x`}
                        type="image/jpg"/>
                        <img className={styles.teamImg} src={team.jpg1x} alt={team.alt} />
                    </picture>
                
                    <div className={styles.teamLinks}>                                   
                        <SocialLinksList                        
                            styles={styles}
                            socialIconsArr={socialIconsArr}
                        />

                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <h3 className={styles.name}>{team.name}</h3>
                <p className={styles.position}>{team.position}</p>
            </div>
            
        </li>
    );
}

export default TeamItem;