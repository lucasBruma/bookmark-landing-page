import React from 'react';
import {appendErrors, useForm} from 'react-hook-form';
import './Form.css';
import { Title } from '../Title';

function Form() {

    const {register, formState:{errors}, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <Title size='small'>35.000+ ALREADY JOINED</Title>
            <Title size='form'>Stay up-to-date with what we’re doing</Title>
            <input type="email" placeholder='Enter your email address' {...register('email',{
                required:true,
                pattern:  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
            })}></input>
            {errors.email?.type === 'required' && <p>You should write your email!</p>}
            {errors.email?.type === 'pattern' && <p>Email format is incorrect</p>}
            <button type='submit' className='button button--box button--red'>Contact us</button>
        </form>
    );
}

export {Form};