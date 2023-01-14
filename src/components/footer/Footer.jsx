import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Footer__Content}>
                { /* left column */}
                <div className={styles.Title}>

                </div>
                { /* center column */}
                <div className={styles.Info}>

                </div>
                { /* right column */}
                <div className={styles.QRCode}>

                </div>
            </div>
        </footer>
    )
}


export default Footer;
