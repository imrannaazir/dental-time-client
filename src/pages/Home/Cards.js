import React from 'react';
import Card from './Card';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Cards = () => {
    const bg1 = 'bg-gradient-to-l from-primary to-secondary'
    const bg2 = 'bg-accent'
    return (
        <div className='grid lg:grid-cols-3 gap-6 mx-6'>
            <Card img={clock} bg={bg1} />
            <Card img={marker} bg={bg2} />
            <Card img={phone} bg={bg1} />
        </div>
    );
};

export default Cards;