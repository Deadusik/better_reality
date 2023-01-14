import React from 'react'
import styles from './WeOnMap.module.scss'
import mapImg from '../../imgs/we_on_map.png'

const WeOnMap = () => {
    return (
        <div className={styles.WeOnMap}>
            <div className={styles.WeOnMap__Content}>
                <h1 className={styles.WeOnMap__Title}>
                    Ми на карті
                </h1>
                <img
                    className={styles.WeOnMap__Map}
                    src={mapImg}
                    alt='we on map' />
                <p className={styles.WeOnMap__Location}>
                    20300, Умань, вул. Джерельна, 1 (біля Епіцентру)
                </p>
            </div>
        </div>
    )
}

export default WeOnMap;