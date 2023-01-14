import React from 'react'
//components
import Header from './header/Header'
import ApartmentTypes from '../../apartment_types/ApartmentTypes'
import WhyUs from './why_us/WhyUs'
//styles
import styles from './Home.module.scss'
import WeOnMap from '../../we_on_map/WeOnMap'
import AdviceForm from '../../ui/advice/advice_form/AdviceForm'


const Home = () => {
    return (
        <div className={styles.Home}>
            <Header />
            <ApartmentTypes />
            <div className={styles.Home__WhyUs}>
                <WhyUs />
            </div>
            <div className={styles.Home__WeOnMap}>
                <WeOnMap />
            </div>
            <div className={styles.Home__AdviceForm}>
                <AdviceForm />
            </div>
        </div>
    )
}

export default Home;