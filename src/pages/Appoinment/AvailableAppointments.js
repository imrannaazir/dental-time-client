import { format } from 'date-fns';
import React, { useState } from 'react';
import Treatment from './Treatment';
import TreatmentModal from './TreatmentModal';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))
    console.log(services);

    if (isLoading) return <Loading />
    return (
        <div className='mb-40'>
            <p className='text-center text-2xl text-secondary mb-24'>Available Appointments on {format(date, 'PP')}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-9'>
                {
                    services?.map(service => <Treatment setTreatment={setTreatment} key={service._id} service={service} />)
                }
            </div>
            {treatment && <TreatmentModal date={date} refetch={refetch} setTreatment={setTreatment} treatment={treatment} />}
        </div>
    );
};

export default AvailableAppointments;