import React from 'react';
import "./Logo.css"

function Logo({showModal}) {
    return (
        <div className='logo-container'>
            {!showModal ? 
            <img src='/images/logo-bookmark.svg'></img>
            :<img src='/images/logo-bookmark-modal.svg'></img>} 
        </div>
    );
}

export {Logo};