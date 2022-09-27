import styles from './Contact.module.css';
import icons from '../../assets/sprite.svg';

import contactWebp1x from '../../assets/images/contact/contact.webp';
import contactWebp2x from '../../assets/images/contact/contact@2x.webp';
import contactJpg1x from '../../assets/images/contact/contact.jpg';
import contactJpg2x from '../../assets/images/contact/contact@2x.jpg';

function Contact() {
  return (
    <section className={styles.contact} id={'contact'}>
            <div className={styles.contactContainer}>
                <div className={styles.contactItem}> 
                    <picture className="pic">
                        <source srcset={`${contactWebp1x} 1x, ${contactWebp2x} 2x`}type="image/webp"/>
                        <source srcset={`${contactJpg1x} 1x, ${contactJpg2x} 2x`}/>
                        <img className={styles.contactImg} src={contactJpg1x} alt="man" />
                    </picture>
              </div> 
              <div className={styles.contactItem}>
                <div className={styles.contactDescription}>
                    <h2 className={styles.contactTitle}>Request Callback</h2>
                    <form  className={styles.form}>
                        <div className={styles.formItem}>
                            <input className={styles.formInput} placeholder=" " name="name" type="text" id="user-name" />
                            <label className={styles.formLabel} htmlFor="user-name">Enter your name</label>
                        </div>
                        <div className={styles.formItem}>
                            <input className={styles.formInput} placeholder=" " name="email" type="text" id="user-email" />
                            <label className={styles.formLabel} htmlFor="user-email">Enter email*</label>
                            <p className={styles.worning}>
                                <svg className={styles.iconWorning} width="7" height="10">
                                    <use href={`${icons}#worning`} />
                                </svg>
                                <span className="text-worning">This is required field</span>
                            </p>
                        </div>
                        <button type="submit" className={styles.formSubmitBtn}>Send</button>
                    </form>
                </div>
            </div>
          </div>
        </section>
  );
}

export default Contact;