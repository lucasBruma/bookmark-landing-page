import React from 'react';
import './Card.css';
import {Title} from '../Title'
import { Paragraph } from '../Paragraph';
import {Button} from '../Button';

function Card({browser, version}) {
    return (
        <div className='card'>
            <div className='card__content'>
                <img src={`/images/logo-${browser}.svg`}></img>
                <Title size='card'>Add to {`${browser.charAt(0).toUpperCase() + browser.slice(1)}`}</Title>
                <Paragraph>Minimum version {version}</Paragraph>
            </div>
            <div className='card__button'>
                <Button bg="blue" type="box">Add & Install Extension</Button>
            </div>
        </div>
    );
}

export {Card};