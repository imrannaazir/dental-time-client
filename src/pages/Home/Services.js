import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const services = [
        {
            id: 1,
            img: fluoride,
            title: 'Fluoride Treatment'
        },
        {
            id: 2,
            img: cavity,
            title: 'Cavity Filling'
        },
        {
            id: 3,
            img: whitening,
            title: 'Teeth Whitening'
        }
    ]
    return (
        <section className='py-32'>
            <div className=' text-center'>
                <p className='text-xl font-bold text-primary'>OUR SERVICES</p>
                <p className='text-4xl text-accent'>Service We Provide</p>
            </div>

            <div className='px-6 grid lg:grid-cols-3 gap-14 mt-16'>
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }

            </div>

        </section>
    );
};

export default Services;