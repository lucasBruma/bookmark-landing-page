import React from 'react';
import './Button.css'

function Button({children, bg, type}) {

    return (
        <button className={`button button--${type} button--${bg}`}>
            {children}
        </button>
    );
}

export {Button};