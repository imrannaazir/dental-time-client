import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const TreatmentModal = ({ treatment, date }) => {
    const [user] = useAuthState(auth);
    const handleBooking = e => {
        e.preventDefault()
        console.log('clicked');
        const newBooking = {
            date: format(date, 'PP'),
            slot: e.target.slot.value
        }
        console.log(newBooking);
    }


    return (
        <div>

            <input type="checkbox" id="my-treatment-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-treatment-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">{treatment?.name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className='mt-12 flex flex-col gap-5'>
                        <input
                            type="text"
                            value={format(date, 'PP')}
                            disabled
                            class="input input-bordered w-full "
                        />

                        <select
                            name='slot'
                            class="select select-bordered w-full">
                            {
                                treatment?.slots.map((slot, index) =>
                                    <option
                                        key={index}

                                    >{slot}</option>
                                )
                            }

                        </select>

                        <input
                            type="text"
                            value={user?.displayName}
                            disabled
                            class="input input-bordered w-full "
                        />
                        <input
                            type="email"
                            value={user?.email}
                            disabled
                            class="input input-bordered w-full "
                        />
                        <input
                            name='phone'
                            type="text"
                            placeholder='Phone'
                            class="input input-bordered w-full "
                        />
                        <label
                            for="my-treatment-modal" class="btn font-normal">SUBMIT</label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TreatmentModal;