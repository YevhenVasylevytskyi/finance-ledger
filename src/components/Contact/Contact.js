import contactWebp1x from '../../assets/images/contact/contact.webp';
import contactWebp2x from '../../assets/images/contact/contact@2x.webp';
import contactJpg1x from '../../assets/images/contact/contact.jpg';
import contactJpg2x from '../../assets/images/contact/contact@2x.jpg';

import { useForm } from 'react-hook-form'

import icons from '../../assets/sprite.svg';
import styles from './Contact.module.css';

function Contact() {
    const {
        register,
        formState: {
          errors,  
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        reset()
    }
   
    return (    
    <section className={styles.contact} id={'contact'}>
        <div className={styles.contactContainer}>
            <picture className='pic'>
                <source srcSet={`${contactWebp1x} 1x, ${contactWebp2x} 2x`}type='image/webp'/>
                <source srcSet={`${contactJpg1x} 1x, ${contactJpg2x} 2x`}/>
                <img className={styles.contactImg} src={contactJpg1x} alt='man' />
            </picture>
            <div className={styles.contactDescription}>
                <h2 className={styles.contactTitle}>Request Callback</h2>           
                        
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.form}
                        name="contact"
                        method="post"
                    >
                    <input
                        type="hidden"
                        name="form-name"
                        value="contact" 
                    />
                            
                    <div className={styles.formItem}>

                        <input
                            className={styles.formInput}
                            placeholder="Enter your name"
                            name="name"
                            type="text"
                            id="user-name"                                
                            />                          
                        

                        <label
                            className={styles.formLabel}
                            htmlFor="user-name"
                        >                                    
                        </label> 
                        </div> 

                    <div className={styles.formItem}>

                        <input
                            className={styles.formInput}
                            placeholder="Enter email*"
                            name="email"
                            type="text"
                                id="user-email"
                                {...register("email", {
                                    required: true
                                })}
                        />

                        <label
                            className={styles.formLabel}
                            htmlFor="user-email"
                        >
                        </label>
                                
                        </div>
                        <div className={styles.worningContainer}>
                            {errors?.email &&
                                <div className={styles.worning}>
                                    <svg className={styles.iconWorning} width="7"    height="10">
                                        <use href={`${icons}#worning`} />
                                    </svg>
                                    <span className="text-worning">
                                        This is required field
                                    </span>
                                </div>
                            }
                        </div>

                    <button
                        className={styles.formSubmitBtn}
                        type="submit"
                    >
                        Send
                    </button>

                </form>
            </div>
        </div>
    </section>
  );
}

export default Contact;