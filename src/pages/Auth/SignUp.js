import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const form = location.state?.form?.pathname || '/'
    const [user, loading, error] = useAuthState(auth)
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [token] = useToken(gUser || eUser || user);


    const { register, watch, formState: { errors }, handleSubmit } = useForm({ mode: onchange });


    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)

    };

    const password = watch('password')

    if (loading || gLoading || eLoading) return <Loading />

    if (error || gError || eError) {
        console.log(error?.message || gError?.message || eError?.message);
    }
    if (token) {
        navigate(form)
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl  p-7">



                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className='text-xl text-center my-4'>Create account</p>

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

                    {/* handle confirm password */}

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Confirm Password</span>
                        </label>
                        <input
                            {...register("confirm_password", {
                                required: {
                                    value: true,
                                    message: 'confirm password is required'
                                },
                                validate: value => value === password || 'passwords do not match!'

                            })
                            }
                            type="password"
                            placeholder="Enter password"
                            class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            {errors.confirm_password?.type === 'required' && <span class="label-text-alt text-error">{errors.confirm_password.message}</span>}
                            {errors.confirm_password?.type === 'validate' && <span class="label-text-alt text-error">{errors.confirm_password.message}</span>}

                        </label>
                    </div>




                    <input className='btn btn-block' value='SIGN IN' type="submit" />
                    <p className='text-center text-sm my-3'>Have an account?<Link className='text-primary' to='/login'>Please log in</Link></p>
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

export default SignUp;