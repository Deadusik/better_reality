import React from 'react'
import styles from './WhyUs.module.scss'
import '../../../../styles/wrapping.scss'
//imgs
import img1 from '../../../../imgs/icons/house.png'
import img2 from '../../../../imgs/icons/roulette.png'
import img3 from '../../../../imgs/icons/house_gear.png'

const WhyUs = () => {
    const args = [
        {
            iconPath: img1,
            value: '135',
            name: 'Квартири',
            width: '27%',
            minWidth: '305px',
            valueFontFamily: 'HaettenschweilerRegular'
        },
        {
            iconPath: img2,
            value: '0.3 га',
            name: 'Площа забудови',
            width: '37%',
            minWidth: '414px',
            valueFontFamily: 'HeliosBold'
        },
        {
            iconPath: img3,
            value: '10',
            name: 'Поверхів',
            width: '27%',
            minWidth: '305px',
            valueFontFamily: 'HeliosBold'
        },
    ]

    return (
        <div className={styles.WhyUs}>
            <div className={[styles.WhyUs__Content, 'wrapcontent'].join(' ')}>
                <h1 className={styles.WhyUs__Title}>
                    Чому ми?
                </h1>
                <div className={styles.WhyUs__Arguments}>
                    { // arguments row
                        args.map((argument, index) =>
                            <div
                                key={Date.now() + index}
                                className={styles.Argument}
                                style={
                                    {
                                        width: argument.width,
                                        minWidth: argument.minWidth
                                    }
                                }>
                                <img
                                    className={styles.Argument__Icon}
                                    src={argument.iconPath}
                                    alt='icon' />
                                <div className={styles.Argument__Data}>
                                    <h2 className={styles.Argument__Value}
                                        style={
                                            {
                                                fontFamily: argument.valueFontFamily
                                            }
                                        }>
                                        {argument.value}
                                    </h2>
                                    <p className={styles.Argument__Name}>
                                        {argument.name}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={styles.WhyUs__Description}>
                    При передачі квартири власнику в квартирі будуть вхідні двері, вікна, балконний блок, газовий котел, батареї, чорнова штукатурка стін, чорнова стяжка підлоги.
                </div>
            </div>
        </div>
    )
}

export default WhyUs;