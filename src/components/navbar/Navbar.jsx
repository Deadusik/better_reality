import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//styles
import '../../styles/wrapping.scss'
import styles from './Navbar.module.scss'
//imgs
import logoImg from '../../imgs/logo.png'
import AdviceDialog from '../ui/advice/advice_dialog/AdviceDialog'

const Navbar = ({ pathname }) => {
    const [showDialog, setShowDialog] = useState(false);

    const showCallback = (isShow) => {
        setShowDialog(isShow)
    }

    return (
        <div
            className={
                pathname === '/' ?
                    [styles.Navbar, styles.Navbar_Home].join(' ')
                    : styles.Navbar
            }>
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
                        className={styles.Links__Link}
                        onClick={() => setShowDialog(!showDialog)}>
                        Центр продажу
                    </Link>
                    <Link
                        to='contacts'
                        className={styles.Links__Link}>
                        Контакти
                    </Link>
                </div>
            </div>

            <AdviceDialog 
            isShow={showDialog}
            showCallback={showCallback} />

        </div>
    )
}

export default Navbar;