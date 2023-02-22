import React from 'react';
import './Modal.css';
import {Button} from '../Button'

function Modal() {
    return (
        <div className='modal-menu'>
            <Button section="features">FEATURES</Button>
            <Button section="pricing">PRICING</Button> 
            <Button section="contact">CONTACT</Button> 
            <Button section="login">LOGIN</Button>  
        </div>
    );
}

export {Modal};