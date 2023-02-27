import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyBooking = () => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth);
    const [MyBooking, setMyBooking] = useState([]);
    useEffect(() => {
        axios.get(`https://dental-time.onrender.com/booking?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(function (response) {
                // handle success
                setMyBooking(response.data);
            })
            .catch(function (error) {
                // handle error
                if (error.response.status === 401 || 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/')
                    toast.error(error.response.data.message + '! please login')
                }
            })
    }, [navigate, user?.email])
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