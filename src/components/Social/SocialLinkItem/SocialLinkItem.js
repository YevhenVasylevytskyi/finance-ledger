import icons from '../../../assets/sprite.svg';

export const SocialLinkItem = ({iconId, href, styles}) => {
    
    return (  
        <li className={styles.socialItem}>
            <a
                href={href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener  noreferrer"
                title={iconId}
            >
                <svg className={styles.socialIcon}>
                    <use href={`${icons}#${iconId}`}></use>
                </svg>
            </a>
        </li>
    )
}

export default SocialLinkItem;