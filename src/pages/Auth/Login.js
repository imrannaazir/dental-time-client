import React from 'react';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

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



                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* input handle for email */}
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'email is required'
                                },
                                pattern: {
                                    value: /^[^@]+@[^@]+\.[^@]+$/,
                                    message: 'invalid email'
                                }
                            })
                            }
                            type="text"
                            placeholder="Enter email"
                            class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-error">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-error">{errors.email.message}</span>}

                        </label>
                    </div>

                    {/* input handle for password */}
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'password must have at least 6 characters!'
                                }
                            })
                            }
                            type="password"
                            placeholder="Enter password"
                            class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-error">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-error">{errors.password.message}</span>}

                        </label>
                    </div>





                    <input className='btn btn-block' value='LOGIN' type="submit" />
                </form>



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