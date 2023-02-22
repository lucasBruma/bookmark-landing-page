import React from 'react';
import { Button } from '../Button';

function Menu() {
    return (
        <>
            <Button section="features">FEATURES</Button>
            <Button section="pricing">PRICING</Button> 
            <Button section="contact">CONTACT</Button> 
            <Button section="login">LOGIN</Button>  
        </>
    );
}

export {Menu};