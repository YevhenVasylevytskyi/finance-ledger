import styles from './Contact.module.css';
import contactJpg from '../../assets/images/contact/contact.jpg'
import icons from '../../assets/sprite.svg'

function Contact() {
  return (
    <section className={styles.contact} id="contact">
            <div className={styles.contactContainer}>
                <picture className="pic">                        
                    <img className={styles.contactImg} src={contactJpg} alt="man" />
                </picture>
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
        </section>
  );
}

export default Contact;