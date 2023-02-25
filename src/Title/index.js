import React from 'react';
import './Title.css'

function Title({children, size}) {
    return (
        <h2 className={`title title--${size}`}>
            {children}
        </h2>
    );
}

export {Title};