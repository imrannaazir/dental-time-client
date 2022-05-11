import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button class="btn border-0 bg-gradient-to-l from-primary to-secondary text-white">{children}</button>
        </div>
    );
};

export default Button;