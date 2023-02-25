import React from 'react';
import './Intro.css'

function Intro({children}) {
    return (
        <div className='intro'>
            {children}
        </div>
    );
}

export {Intro};