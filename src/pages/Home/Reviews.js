import React from 'react';
import client1 from '../../assets/images/people1.png'
import client2 from '../../assets/images/people2.png'
import client3 from '../../assets/images/people3.png'
import Review from './Review';
import bg from '../../assets/icons/quote.svg'

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            img: client1,
            name: 'Winson Herry',
            address: 'California'
        },
        {
            id: 2,
            img: client2,
            name: 'Ema Watson',
            address: 'London'
        },
        {
            id: 3,
            img: client3,
            name: 'Angela Taylor',
            address: 'New York'
        },
    ]
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: '185px' }} className='mx-12 bg-no-repeat bg-right-top mb-36'>
            <div >
                <p className='text-xl text-primary font-bold'>Testimonial</p>
                <p className='w-[228px] lg:w-full text-4xl text-accent'>What Our Patients Says</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-11 items-center mt-36'>
                {
                    reviews.map(review => <Review key={review.id} review={review} />)
                }
            </div>
        </div>
    );
};

export default Reviews;