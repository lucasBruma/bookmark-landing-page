import React from 'react';
import { Button } from '../Button';

function Menu() {
    return (
        <>
            <Button bg="transparent" type="menu">FEATURES</Button>
            <Button bg="transparent" type="menu">PRICING</Button> 
            <Button bg="transparent" type="menu">CONTACT</Button> 
            <Button bg="red" type="box">LOGIN</Button>  
        </>
    );
}

export {Menu};