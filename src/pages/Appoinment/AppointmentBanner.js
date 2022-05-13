import bg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <header style={{ backgroundImage: `url(${bg})` }} class="flex justify-center items-center min-h-screen bg-bottom">
            <div class="hero-content flex-col gap-14 lg:flex-row-reverse ">
                <img className='lg:w-[50%]' src={chair} alt='chair' />
                <div className=''>

                    <DayPicker
                        style={{
                            padding: '20px',
                            background: 'white',
                            boxShadow: '3px 4px 10px 2px rgba(0, 0, 0, 0.05)',
                            borderRadius: '18px'
                        }}
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />

                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;