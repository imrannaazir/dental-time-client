import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const AllUser = () => {
    const { isLoading, error, data, refetch } = useQuery('repoData', () =>
        axios.get('http://localhost:5000/users', {
            headers:
            {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })

    )

    if (isLoading) return <Loading />
    if (error) {
        console.log(error);
    }
    const users = data?.data;

    return (
        <div className='w-[95%] mx-auto'>
            <p className='my-10 text-4xl'>All Users-{users?.length}</p>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>User Email</th>
                            <th>Make as a admin</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, i) => { return <User key={user._id} i={i} user={user} refetch={refetch} /> })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;