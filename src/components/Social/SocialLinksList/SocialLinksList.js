import SocialLinkItem from '../SocialLinkItem/SocialLinkItem';

import socialIconsArr from '../socialIcons/socialIconsArr';

const SocialLinksList = ({styles}) => {
    return (
        <ul className={styles.socialList}>
            {socialIconsArr.map((item) => {
                return <SocialLinkItem
                    key={item.iconId}
                    iconId={item.iconId}
                    href={item.href}
                    styles={styles}
                />
            })}
        </ul>
    )
}

export default SocialLinksList;