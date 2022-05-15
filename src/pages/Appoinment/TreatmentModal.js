import axios from 'axios';
import { success } from 'daisyui/src/colors';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const TreatmentModal = ({ setTreatment, treatment, date }) => {
    const [user] = useAuthState(auth);
    console.log(treatment);
    const handleBooking = async e => {
        e.preventDefault()
        const newBooking = {
            patientEmail: user.email,
            patientName: user.displayName,
            patientPhone: e.target.phone.value,
            treatmentId: treatment._id,
            treatmentName: treatment.name,
            date: format(date, 'PP'),
            slot: e.target.slot.value
        }
        const { data } = await axios.post('http://localhost:5000/booking', newBooking)
        console.log(data);
        if (data.success) {
            toast.success(`You booked ${treatment.name} on ${format(date, 'PP')}`)
        }
        else {
            toast.error(`Failed! You've already booked ${data.newBooking.treatmentName} on ${data.newBooking.date}`)
        }
        setTreatment(null)

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
                            required
                        />
                        <button
                            for="my-treatment-modal" class="btn font-normal">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TreatmentModal;