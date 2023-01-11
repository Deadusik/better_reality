import React from 'react'
//compontents
import Button from '../../../ui/button/Button'
//styles
import styles from './Header.module.scss'
import '../../../../styles/contentwrapping.scss'
//imgs
import background from '../../../../imgs/background/header.png'
import buildingImg from '../../../../imgs/building.png'
import NextButton from '../../../ui/button/NextButton'

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={
                [
                    styles.Header__Content,
                    'wrapcontent wrapcontent_top'
                ].join(' ')}>
                {/* left col */}
                <div className={styles.Header__Col}>
                    <h1
                        className={styles.Header__Title}>
                        Ріелторська агенція
                    </h1>
                    <div className={styles.Header__Description}>
                        Шукайте квартиру? Тоді вам точно до нас! Підберемо, допоможемо та поселимо.
                    </div>
                    <div className={styles.Header__Button}>
                        <Button>Вибрати квартиру</Button>
                    </div>
                </div>
                {/* right col */}
                <div className={styles.Header__Col}>
                    <div className={styles.Header__CircleImgContainer}>
                        <div className={styles.Header__CircleImgBorder}>
                            <img
                                className={styles.Header__CircleImg}
                                src={buildingImg}
                                alt='building' />
                        </div>
                    </div>
                    <div className={styles.Header__NextButton}>
                        <NextButton />
                    </div>
                </div>
            </div>
            <img
                className={styles.Header__Background}
                src={background}
                alt='building' />
        </div>
    )
}

export default Header;