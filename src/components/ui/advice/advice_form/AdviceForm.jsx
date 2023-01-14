import React from 'react'
import styles from './AdviceForm.module.scss'
import '../../../../styles/wrapping.scss'

const AdviceForm = () => {
    return (
        <div className={styles.AdviceForm}>
            <div className={[styles.AdviceForm__Content, 'wrapcontent'].join(' ')}>
                <div className={styles.AdviceForm__FormContainer}>
                    { /* info */}
                    <div className={styles.AdviceForm__Info}>
                        <h2 className={styles.AdviceForm__Title}>
                            Отримайте детальну консультацію
                        </h2>
                        <p className={styles.AdviceForm__Description}>
                            Заповніть анкету, щоб отримати детальну відповідь на ваші запитання та попередню вартість.
                        </p>
                    </div>
                    { /* form */}
                    <form id='adviceform' action='/' className={styles.AdviceForm__Form}>
                        <input type='text' id='name' placeholder="Ваше ім'я" />
                        <input type='text' id='area' placeholder="Бажана площа Вашої квартири" />
                        <input type='text' id='roomcount' placeholder="Однокімнатна або двокімнатна квартира" />
                        <input type='text' id='phone' placeholder="Номер телефону" />
                    </form>
                </div>
                <input className={styles.AdviceForm__Submit} form='adviceform' type='submit' value='Відпривити' />
            </div>
        </div>
    )
}

export default AdviceForm;