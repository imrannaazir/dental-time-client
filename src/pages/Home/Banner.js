import React from 'react';
import Button from '../Shared/Button';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <header style={{ backgroundImage: `url(${bg})` }} class="hero min-h-screen bg-cover">
            <div class="hero-content flex-col gap-14 lg:flex-row-reverse ">
                <img className='lg:w-[50%]' src={chair} alt='chair' />
                <div className='lg:w-[50%]'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>GET STARTED</Button>
                </div>
            </div>
        </header>
    );
};

export default Banner;