import React from 'react';
import '../Button/Button.css'

function MenuButton({type,children}) {
    return (
        <button className={`button button--transparent button--${type}`}>
            <a href={`#${children.toLowerCase()}`}>{children}</a>
        </button>
    );
}

export {MenuButton};