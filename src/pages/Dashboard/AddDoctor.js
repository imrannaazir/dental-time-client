import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { data: services, isLoading } = useQuery('services', () => axios.get('https://dental-time.onrender.com/services'));
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)

    };
    if (isLoading) return <Loading />
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl  p-7">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className='text-xl text-center my-4'>Add a Doctor</p>

                    {/* input handle for name */}
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Doctor's name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'name is required'
                                }
                            })
                            }
                            type="text"
                            placeholder="Enter name"
                            class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-error">{errors.name.message}</span>}


                        </label>
                    </div>

                    {/* input handle for email */}
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Doctor's email</span>
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

                    {/* input handle for Specialty */}
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Specialty</span>
                        </label>

                        <select
                            {...register("specialty", {
                                required: {
                                    value: true,
                                    message: 'specialty is required'
                                }
                            })
                            }
                            class="select w-full max-w-xs">
                            {
                                services.data?.map(service => { return <option key={service._id} >{service.name}</option> })
                            }
                        </select>

                        {/* <input
                            {...register("specialty", {
                                required: {
                                    value: true,
                                    message: 'specialty is required'
                                }
                            })
                            }
                            type="text"
                            placeholder="Enter specialty"
                            class="input input-bordered w-full max-w-xs" /> */}
                        <label class="label">
                            {errors.specialty?.type === 'required' && <span class="label-text-alt text-error">{errors.specialty.message}</span>}

                        </label>
                    </div>





                    <input className='btn btn-block' value='add' type="submit" />

                </form>




            </div>
        </div>
    );
};

export default AddDoctor;