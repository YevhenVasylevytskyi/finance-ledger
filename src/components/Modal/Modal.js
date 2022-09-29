import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import icons from '../../assets/sprite.svg'

import styles from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ active, setActive, itemLooking, onCloseModal, changeImage, images }) => {
    
    const { src, alt, id } = itemLooking
    console.log(src)

    const [dataImages, setDataImages] = useState(images)
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const findIndexImg = (src) => {
        return dataImages.indexOf(dataImages.find((el) => el.jpg_1x === src))
    }
    
    let findCurrentIndex = findIndexImg(src)
    
    const nextImg = () => {
    const isLastSlide = findCurrentIndex === dataImages.length - 1
    const newIndex = isLastSlide
      ? (findCurrentIndex = -1)
      : findCurrentIndex + 1

    setCurrentIndex(newIndex)
    let imgUrl = dataImages[newIndex].jpg_1x
    let imgAlt = dataImages[newIndex].alt

    changeImage(imgUrl, imgAlt)
    }

    const prevImg = () => {
    const isFirstSlide = findCurrentIndex - 1 === currentIndex
    const newIndex = isFirstSlide
      ? (findCurrentIndex = dataImages.length)
      : findCurrentIndex - 1

    setCurrentIndex(findCurrentIndex)
    let imgUrl = dataImages[newIndex].jpg_1x
    let imgAlt = dataImages[newIndex].alt

    changeImage(imgUrl, imgAlt)
    }

    const onCloseBackdrop = (e) => {
        e.stopPropagation()
        if (e.target === e.currentTarget) {
            onCloseModal()
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    })
    
    const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            onCloseModal()
        }
    }

    return createPortal(
        <div className={styles.modalOverlay} onClick={onCloseBackdrop}>
            <div className={styles.modalWrapperContent}>
                <div className={styles.modalContainer}>
                    {findCurrentIndex ? (
                        <span className={styles.modalBtnLeft} onClick={prevImg}>
                            <svg className={styles.modalBtnLeftSvg} width='9' height='18'>
                                <use href={`${icons}#angle-right`}></use>
                            </svg>
                        </span>
                    ) : null}

                    <img src={src} alt={alt} className={styles.modalImg} />

                    {findCurrentIndex === dataImages.length - 1 ? null : (
                        <span className={styles.modalBtnRight} onClick={nextImg}>
                            <svg className={styles.modalBtnRightSvg} width='9' height='18'>
                            <use href={`${icons}#angle-right`}></use>
                            </svg>
                        </span>
                    )}
                </div>

            <div className={styles.modalImgDescription}>
                <div>
                    <p>{alt}</p>
                    <span>{` image ${id ? id : findCurrentIndex + 1} of ${dataImages.length}`}
                    </span>
                </div>
                <span className={styles.closeIcon} onClick={onCloseModal}>
                    <svg className={styles.closeIcon} width='9' height='18'>
                        <use href={`${icons}#close-modal`}></use>
                    </svg>
                </span>
            </div>
        </div>
    </div>,
    modalRoot,
    )
}

export default Modal;