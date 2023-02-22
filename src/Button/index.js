import React, { Children } from 'react';

function Button({children, section}) {
    return (
        <button id={section}>
            {children}
        </button>
    );
}

export {Button};