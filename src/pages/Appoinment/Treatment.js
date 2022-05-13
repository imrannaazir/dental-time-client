import React from 'react';

const Treatment = ({ service, service: { name, slots }, setTreatment }) => {

    return (
        <div class="card lg:w-96 bg-base-100 shadow-xl">

            <div class="card-body items-center text-center">
                <h2 class="card-title text-xl font-semibold text-secondary">{name}</h2>
                <p className={`text-sm ${!slots[0] && 'text-red-500'}`}>{slots[0] || 'try another day!'}</p>
                <p className='text-sm'>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>

                <div class="card-actions">
                    <label
                        onClick={() => setTreatment(service)}
                        for="my-treatment-modal"
                        class={`btn ${slots.length > 1 ? 'btn-active bg-gradient-to-l from-primary to-secondary text-white' : 'btn-disabled '} border-0  `}>BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default Treatment;