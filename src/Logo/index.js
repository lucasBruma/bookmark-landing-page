import React from 'react';
import "./Logo.css"

function Logo({showModal}) {
    return (
        <div className={`logo-container ${showModal && 'logo-container--white'}`} >
           <img src='/images/logo-bookmark.svg'></img>
        </div>
    );
}

export {Logo};