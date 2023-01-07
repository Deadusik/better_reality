import React from 'react'
import { Link } from 'react-router-dom'
//styles
import '../../styles/contentwrapping.scss'
import styles from './Navbar.module.scss'
//imgs
import logoImg from '../../imgs/logo.png'

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <div className={[styles.Navbar__Content, 'wrapcontent'].join(' ')}>
                <div className={styles.Logo}>
                    <Link to='/'>
                        <img src={logoImg} alt='logo' />
                    </Link>
                </div>
                <div className={styles.Links}>
                    <Link
                        to='aboutcity'
                        className={styles.Links__Link}>
                        Про місто
                    </Link>
                    <Link
                        to='aboutus'
                        className={styles.Links__Link}>
                        Про нас
                    </Link>
                    <Link
                        className={styles.Links__Link}>
                        Центр продажу
                    </Link>
                    <Link
                        to='contacts'
                        className={styles.Links__Link}>
                        Контакти
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;