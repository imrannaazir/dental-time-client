import React from 'react';

const Card = ({ img, bg }) => {

    return (
        <div class={`card card-side  shadow-xl ${bg} text-white px-7`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div class="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default Card;