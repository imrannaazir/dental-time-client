import React from 'react';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"
    const [user, loading, error] = useAuthState(auth)
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if (loading || gLoading) {
        return <Loading />
    }
    if (user || gUser) {
        navigate(from);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl  p-7">
                <div>

                </div>
                <div class="divider">OR</div>
                <div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn w-full btn-outline"
                    >
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;