import React from 'react';
import './Modal.css';
import {Button} from '../Button';
import { Icon } from '../Icon';

function Modal() {
    return (
        <div className='modal'>
            <div className='modal__menu'>
                <Button bg="transparent" type="modal">FEATURES</Button>
                <Button bg="transparent" type="modal">PRICING</Button> 
                <Button bg="transparent" type="modal">CONTACT</Button> 
                <Button bg="transparent" type="modal">LOGIN</Button>   
            </div>
            <div className='modal__icons'>
                <a href='#'><Icon src='/images/icon-facebook.svg'></Icon></a>
                <a href='#'><Icon src='/images/icon-twitter.svg'></Icon></a>
            </div>
        </div>
    );
}

export {Modal};