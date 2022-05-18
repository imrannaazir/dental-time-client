import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyBooking = () => {
    const [user, loading] = useAuthState(auth);
    const [MyBooking, setMyBooking] = useState([]);
    useEffect(() => {
        (async function () {
            const { data } = await axios.get(`http://localhost:5000/booking?email=${user?.email}`)
            setMyBooking(data)
        })()
    }, [user?.email])
    if (loading) return <Loading />

    return (
        <div className='mt-12  w-[90%] mx-auto'>
            <p className='text-2xl mb-8'>My Appointments-{MyBooking.length}</p>

            {/* table */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead className=''>
                        <tr>
                            <th>SL</th>
                            <th>Email</th>
                            <th>SERVICE</th>
                            <th>DATE</th>
                            <th>TIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            MyBooking.map((booking, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{booking.patientEmail}</td>
                                    <td>{booking.treatmentName}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.slot}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBooking;