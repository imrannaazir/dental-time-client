import React from 'react';
import bg from '../../assets/images/appointment.png'
import Button from '../Shared/Button';
const Newsletter = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} class="flex flex-col items-center bg-cover py-16 gap-10 bg-fixed">
            <div className='text-center'>
                <p className='text-primary font-bold'>Contact Us</p>
                <p className='text-4xl text-white'>Stay connected with us</p>
            </div>


            <form className='flex flex-col gap-4 items-center' >
                <input
                    className=' w-[200px] md:w-[450px] h-12 pl-4 rounded-lg'
                    type="email"
                    placeholder='Email Address'
                />
                <input
                    className=' w-[200px] md:w-[450px] h-12 pl-4 rounded-lg'
                    type="text"
                    placeholder='Subject' />
                <textarea
                    className=' w-[200px] md:w-[450px] h-36 pl-4 rounded-lg'
                    placeholder='Your message'
                ></textarea>
                <Button>Submit</Button>
            </form>

        </div>

    );
};

export default Newsletter;