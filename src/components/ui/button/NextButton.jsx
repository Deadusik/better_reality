import React from 'react'
import styles from './NextButton.module.scss'

const NextButton = () => {
    return (
        <button className={styles.NextButton}>
            <div className={styles.NextButton__Circle}></div>
            <div className={styles.NextButton__Arrow}></div>
            <div className={styles.NextButton__Line}></div>
        </button>
    )
}

export default NextButton;