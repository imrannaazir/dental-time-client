import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        (async function () {
            const { data } = await axios.get(`https://dental-time.onrender.com/admin/${user?.email}`)
            setIsAdmin(data.isAdmin);
        })()
    }, [user?.email])
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content  bg-[#F1F5F9]">

                <Outlet />


                <label for="my-drawer-2" class="btn btn-outline border-0 drawer-button absolute top-0 left-0 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                    <li><Link to='/dashboard/history'>History</Link></li>
                    {isAdmin &&
                        <>
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            <li><Link to='/dashboard/add-doctor'>Add Doctor</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;