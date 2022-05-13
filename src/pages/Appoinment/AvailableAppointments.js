import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Treatment from './Treatment';
import TreatmentModal from './TreatmentModal';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        (async function () {
            const { data } = await axios.get('http://localhost:5000/services')
            setServices(data);
        })()
    }, [])
    return (
        <div className='mb-40'>
            <p className='text-center text-2xl text-secondary mb-24'>Available Appointments on {format(date, 'PP')}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-9'>
                {
                    services.map(service => <Treatment setTreatment={setTreatment} key={service._id} service={service} />)
                }
            </div>
            <TreatmentModal date={date} treatment={treatment} />
        </div>
    );
};

export default AvailableAppointments;