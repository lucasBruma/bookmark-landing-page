import React from 'react';
import './IllustrationWithBg.css';
import { RoundedBlueBg } from '../RoundedBlueBg';

function IllustrationWithBg({direction, img, type}) {
    return (
        <div className={`illustration-container ${direction}`}>
            <img className={`illustration-hero ${type == 'composed' ? 'illustration-hero--composed' : ''}`} src={`/images/${img}`}></img>  
            <RoundedBlueBg/>
        </div>
    );
}

export {IllustrationWithBg};