import React from 'react';
import './Header.css';
import {Logo} from '../Logo';
import {ToggleMenuButton} from '../ToggleMenuButton';
import {Menu} from '../Menu'

function Header({showModal, setShowModal, showMenu, setShowMenu}) {


    return (
        <header>
            <Logo src='/images/logo-bookmark.svg'/>
            {showMenu ? <Menu/> : 
            <ToggleMenuButton showModal={showModal} setShowModal={setShowModal} src='/images/icon-hamburger.svg'></ToggleMenuButton>}
        </header>
    );
}

export {Header};