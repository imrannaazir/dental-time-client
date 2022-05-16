import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import userimg from '../../assets/images/user.jpg'
import auth from '../../firebase.init';

const Navbar = ({ children }) => {
    const location = useLocation();

    const [path, setPath] = useState(false);
    useEffect(() => {

        if (location.pathname === '/dashboard') {
            setPath(true)
        }
        else if (location.pathname === '/dashboard/history') {
            setPath(true)
        }
        else if (location.pathname === '/dashboard/reviews') {
            setPath(true)
        }
        else {
            setPath(false)
        }
    }, [location.pathname])
    const [user, loading] = useAuthState(auth);
    const navElement = <>
        <li><NavLink className='rounded-lg' to='/'>Home</NavLink></li>
        <li><NavLink className='rounded-lg' to='/appointment'>Appointment</NavLink></li>
        <li><NavLink className='rounded-lg' to='/reviews'>Reviews</NavLink></li>
        <li><NavLink className='rounded-lg' to='/contact'>Contact</NavLink></li>
        <li><NavLink className='rounded-lg' to='/about'>About</NavLink></li>

        {user ?
            <div class="dropdown dropdown-end dropdown-hover">
                <label tabindex="0"><div class="avatar online mt-2">
                    <div class="w-8 rounded-full">
                        <img src={user?.photoURL || userimg} alt="" />
                    </div>
                </div></label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                            <img src={user?.photoURL || userimg} alt="" />
                        </div>
                    </div>
                    <div class="divider"></div>
                    <p className='text-center text-primary font-semibold'>{user?.displayName}</p>
                    <p className='text-center  text-xs'>{user?.email}</p>
                    <a className='btn btn-block btn-outline my-2' href='/dashboard'>Dashboard</a>

                    <button
                        onClick={() => signOut(auth)}
                        class="btn gap-2 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Logout
                    </button>
                </ul>
            </div>
            :

            <li><NavLink to='/login'>Login</NavLink></li>
        }
    </>


    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* navbar */}
                {path ? ''
                    :
                    <div class={`w-full navbar bg-base-100 px-12 fixed top-0 z-50 `}>

                        <div class="flex-1 px-2 mx-2 text-xl">DentalTime</div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                {/* menu content */}
                                {navElement}
                            </ul>
                        </div>

                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                        </div>
                    </div>}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* slider content */}
                    {navElement}

                </ul>

            </div>
        </div>
    );
};

export default Navbar;