import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Cards from './Cards';
import DentalCare from './DentalCare';
import Navbar from './Navbar';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Cards />
            <Services />
            <DentalCare />
            <Appointment />

        </div>
    );
};

export default Home;