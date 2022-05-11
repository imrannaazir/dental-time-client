import React from 'react';

const Review = ({ review: { name, address, img } }) => {
    return (
        <div class="card lg:w-96 bg-base-100 shadow-xl p-8">
            <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            <div className='mt-9 flex items-center'>
                <div class="avatar">
                    <div class="w-[75px] h-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div className='pl-3'>
                    <p className='text-xl text-accent font-semibold'>{name}</p>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;