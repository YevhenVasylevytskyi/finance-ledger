import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import images from './casesImagesArr/casesImagesArr'

import styles from './Cases.module.css';

function Cases() {
  const [showModal, setShowModal] = useState(false)
  const [itemLooking, setItemLooking] = useState(null);  

  const onClickImg = (el) => { 
    setShowModal(true)
    setModalImg(el.jpg_1x, el.alt, el.id)
    }
  
  const setModalImg = (src, alt, id) => {
    setItemLooking({ src: src, alt: alt, id: id })
  } 
  
  const modalClose = () => {
    setShowModal(false)
    setItemLooking(null)
  }

  return (
    <section className={styles.cases} id='cases'>
      <div className={styles.casesContainer}>
        <div>
          <p className={styles.casesSubtitle}>This is what we do</p>
          <h2 className={styles.casesTitle}>Business Cases</h2>
          <p className={styles.casesText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
        </div>
        <ul className={styles.casesList}>
          {images.map((image) => (
            <li
              key={image.id}
              className={styles.casesItem}
              onClick={() => {onClickImg(image)}}
            >
              <picture>
                <source
                  srcSet={`${image.webp_1x} 1x, ${image.webp_2x} 2x`}
                  // media='(minWidth: 768px)'
                  type="image/webp"
                />
                <source
                  srcSet={`${image.jpg_1x} 1x, ${image.jpg_2x} 2x`}
                  // media='(minWidth: 1360px)'
                  type="image/jpg"
                />

                <img className={styles.casesImg} src={`${image.webp_1x}`} alt={image.alt} />
              </picture>
            </li>
          ))}          
        </ul>
        {showModal && (
          <Modal
            active={showModal}
            setActive={setShowModal}
            itemLooking={itemLooking}
            onCloseModal={modalClose}
            changeImage={setModalImg}
            images={images}          
          />
        )}        
      </div>      
    </section>
  );
}

export default Cases;