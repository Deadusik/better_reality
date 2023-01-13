import React from 'react'
//components
import Header from './header/Header'
import ApartmentTypes from '../../apartment_types/ApartmentTypes'
//styles
import styles from './Home.module.scss'


const Home = () => {
    return (
        <div>
            <Header />
            <ApartmentTypes />
        </div>
    )
}

export default Home;