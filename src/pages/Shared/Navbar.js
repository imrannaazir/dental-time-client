import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const navElement = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/'>Reviews</Link></li>
        <li><Link to='/'>Contact</Link></li>
        <li><Link to='/'>About</Link></li>

        {user ?
            <div class="dropdown">
                <label tabindex="0"><div class="avatar online">
                    <div class="w-12 rounded-full">
                        <img src={user?.photoURL} alt="" />
                    </div>
                </div></label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div>
                    <div class="divider"></div>
                    <p className='text-center text-primary font-semibold'>{user?.displayName}</p>
                    <p className='text-center  text-xs'>{user?.email}</p>

                    <button
                        onClick={() => signOut(auth)}
                        class="btn gap-2 mt-5">
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

            <li><Link to='/login'>Login</Link></li>
        }
    </>


    return (
        <nav class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navElement}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">DentalTime</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navElement}

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;