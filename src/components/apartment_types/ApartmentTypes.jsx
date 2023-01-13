import React from 'react'
//components
import BgImgButton from '../ui/button/BgImgButton';
//styles
import styles from './ApartmentTypes.module.scss'
//imgs
import img1 from '../../imgs/apartment_types/single.png'
import img2 from '../../imgs/apartment_types/tworoom.png'
import img3 from '../../imgs/apartment_types/office.png'
import img4 from '../../imgs/apartment_types/studio.png'

const ApartmentTypes = () => {
    const apartments = [
        {
            type: 'Однокімнатна',
            imgSrc: img1
        },
        {
            type: 'Двокімнатна',
            imgSrc: img2
        },
        {
            type: 'Офісні приміщення',
            imgSrc: img3
        },
        {
            type: 'Студія',
            imgSrc: img4
        },
    ]

    return (
        <div className={styles.ApartmentTypes}>
            <div className={styles.ApartmentTypes__Content}>
                {
                    apartments.map((apartment, index) => {
                        const isWrapContent =
                            index % 2 === 0 ? true : false

                        return (
                            <div className={styles.ApartmentTypes__Item}>
                                <BgImgButton
                                    background={apartment.imgSrc}
                                    isWrapContent={isWrapContent}>
                                    {apartment.type}
                                </BgImgButton>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default ApartmentTypes;