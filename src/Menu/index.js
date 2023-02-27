import React from 'react';
import { Button } from '../Button';
import { MenuButton } from '../MenuButton';
import './Menu.css';

function Menu() {
    return (
        <div className='header__menu'>
            <MenuButton bg="transparent" type="menu">FEATURES</MenuButton>
            <MenuButton bg="transparent" type="menu">PRICING</MenuButton> 
            <MenuButton bg="transparent" type="menu">CONTACT</MenuButton> 
            <Button bg="red" type="box">LOGIN</Button>  
        </div>
    );
}

export {Menu};