import React from 'react'
import styles from './BgImgButton.module.scss'
import '../../../styles/contentwrapping.scss'

const BgImgButton = ({ children, background, isWrapContent }) => {
    return (
        <div className={styles.BgImgButton}>
            <img
                className={styles.BgImgButton__Background}
                src={background}
                alt='apartment type' />
            <div className={
                [
                    styles.BgImgButton__Content,
                    isWrapContent ? 'wrapcontent' : ''
                ].join(' ')}>
                <div className={styles.BgImgButton__TitleContainer}>
                    <div className={styles.BgImgButton__Title}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgImgButton;