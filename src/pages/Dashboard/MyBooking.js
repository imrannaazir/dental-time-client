import React from 'react';

const MyBooking = () => {
    return (
        <div className='mt-12  w-[90%] mx-auto'>
            <p className='text-2xl mb-8'>My Appointments</p>

            {/* table */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead className=''>
                        <tr>
                            <th>SL</th>
                            <th>SERVICE</th>
                            <th>DATE</th>
                            <th>TIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBooking;