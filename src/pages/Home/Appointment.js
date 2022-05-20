import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png';
import Button from '../Shared/Button';
const Appointment = () => {
    return (
        <section style={{ backgroundImage: `url(${appointment})` }} class="bg-cover flex items-center mt-[170px] mb-20 px-7  py-16 lg:py-0 lg:px-32 bg-fixed">
            <img className='h-[636px] -mt-[200px] hidden lg:block' src={doctor} alt="" />
            <div className=' flex flex-col gap-5'>
                <p className='text-primary font-bold text-xl'>Appointment</p>
                <p className=' text-white font-semibold text-4xl'>Make an appointment Today</p>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>GET STARTED</Button>
            </div>

        </section>
    );
};

export default Appointment;