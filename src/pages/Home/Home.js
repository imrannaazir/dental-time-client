import React from 'react';
import Footer from '../Shared/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import Cards from './Cards';
import DentalCare from './DentalCare';
import Newsletter from './Newsletter';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div>

            <Banner />
            <Cards />
            <Services />
            <DentalCare />
            <Appointment />
            <Reviews />
            <Newsletter />
            <Footer />

        </div>
    );
};

export default Home;