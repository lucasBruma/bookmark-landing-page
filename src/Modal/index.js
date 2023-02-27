import React from 'react';
import './Modal.css';
import {Button} from '../Button';
import { MenuButton } from '../MenuButton';
import { Icon } from '../Icon';
import { Logo } from '../Logo';
import { ToggleMenuButton } from '../ToggleMenuButton';

function Modal({showModal, setShowModal}) {
    return (
        <div className='modal'>
            <div className='modal__top'>
                <Logo src='/images/logo-bookmark-modal.svg'/>  
                <ToggleMenuButton showModal={showModal} setShowModal={setShowModal} src='/images/icon-close.svg'></ToggleMenuButton> 
            </div>  
            <div className='modal__menu'>
                <MenuButton bg="transparent" type="modal">FEATURES</MenuButton>
                <MenuButton bg="transparent" type="modal">PRICING</MenuButton> 
                <MenuButton bg="transparent" type="modal">CONTACT</MenuButton> 
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