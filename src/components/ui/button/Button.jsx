import React from 'react'
import styles from './Button.module.scss'

const Button = ({ children }) => {
    return (
        <button className={styles.Button}>
            <p>{children}</p>
        </button>
    )
}

export default Button;