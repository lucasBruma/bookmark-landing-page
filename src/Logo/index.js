import React from 'react';
import "./Logo.css"

function Logo({src}) {
    return (         
        <img className='logo' src={src}></img>
    );
}

export {Logo};