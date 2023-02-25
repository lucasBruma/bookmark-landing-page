import React from 'react';
import './Features.css'

function Features({children}) {
    return (
        <div className='features'>
            {children}
        </div>
    );
}

export {Features};