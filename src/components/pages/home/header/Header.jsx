import React from 'react'
//styles
import styles from './Header.module.scss'
import '../../../../styles/contentwrapping.scss'
//imgs
import background from '../../../../imgs/background/header.png'

const Header = () => {
    return (
        <div className={styles.Header}>
            <img
                className={styles.Header__Background}
                src={background}
                alt='building' />
            <div className={styles.Header__Content}>
                <h1>text</h1>
            </div>
        </div>
    )
}

export default Header;