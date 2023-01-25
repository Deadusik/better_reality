import React from 'react'
import styles from './Footer.module.scss'
import '../../styles/wrapping.scss'
//imgs 
import logoSrc from '../../imgs/logo.png'
import whatsappSrc from '../../imgs/icons/social_media/whatsapp.png'
import instagramSrc from '../../imgs/icons/social_media/instagram.png'
import mailSrc from '../../imgs/icons/social_media/mail.png'
import facebookSrc from '../../imgs/icons/social_media/facebook.png'
import whatsappQRSrc from '../../imgs/whatsapp_qr.png'

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={[styles.Footer__Content, 'wrapcontent'].join(' ')}>
                { /* left column */}
                <div className={styles.Title}>
                    <img
                        className={styles.Title__Logo}
                        src={logoSrc}
                        alt='logo' />
                    <p>
                        Ріелторська<br />
                        агенція
                    </p>
                    <div className={styles.Title__Icons}>
                        <a href='/'>
                            <img className={styles.Title__Icon} src={whatsappSrc} alt='social media' />
                        </a>
                        <a href='/'>
                            <img className={styles.Title__Icon} src={instagramSrc} alt='social media' />
                        </a>
                        <a href='/'>
                            <img className={styles.Title__Icon} src={mailSrc} alt='social media' />
                        </a>
                        <a href='/'>
                            <img className={styles.Title__Icon} src={facebookSrc} alt='social media' />
                        </a>
                    </div>
                </div>
                { /* center column */}
                <div className={styles.Info}>
                    <p>Контакти</p>
                    <p>+380 73 102 01 20</p>
                    <p>komfort.uman@gmail.com</p>
                    <p>
                        Години роботи: <br />
                        Пн-Пт: 9.00-18.00
                    </p>
                </div>
                { /* right column */}
                <div className={styles.QRCode}>
                    <img src={whatsappQRSrc} alt='qr code' />
                    <p>Чат підтримки</p>
                    <p>WhatsApp</p>
                </div>
            </div>
        </footer>
    )
}


export default Footer;
