import React from 'react';
import {Modal} from '../Modal';
import './ToggleMenuButton.css'

function ToggleMenuButton({showModal , setShowModal}) {

    function toggleModal(){
        setShowModal(!showModal) 
    }

    return (
        <>
            <button className='toggle-menu-button' onClick={toggleModal}>
                {!showModal ? <img src='/images/icon-hamburger.svg'></img> : <img src='/images/icon-close.svg'></img>}
            </button>
            
            {showModal && <Modal/>}
        </>

    );
}

export {ToggleMenuButton};