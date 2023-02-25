import React from 'react';
import './Icon.css'

function Icon({src}) {
    return (
        <img className='icon' src={src}></img>
    );
}

export {Icon};