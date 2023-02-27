import React from 'react';
import './ToggleMenuButton.css'

function ToggleMenuButton({showModal , setShowModal, src}) {

    function toggleModal(){
        setShowModal(!showModal) 
    }

    return (
        <>
            <button className='toggle-menu-button' onClick={toggleModal}>
                <img src={src}></img>
            </button>
        </>

    );
}

export {ToggleMenuButton};