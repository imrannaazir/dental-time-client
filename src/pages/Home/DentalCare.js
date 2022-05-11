import React from 'react';
import treatment from '../../assets/images/treatment.png';
import Button from '../Shared/Button';

const DentalCare = () => {
    return (
        <section class="hero min-h-screen lg:px-56 ">
            <div class="hero-content flex-col lg:flex-row gap-24">
                <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='px-6'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>GET STARTED</Button>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;