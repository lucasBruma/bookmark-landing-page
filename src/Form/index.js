import React from 'react';
import { useForm} from 'react-hook-form';
import './Form.css';
import { Title } from '../Title';

function Form() {
    const [isBtnClicked, setIsBtnClicked] = React.useState(false);
    const {register, formState:{errors}, handleSubmit} = useForm();

    const onSubmit = (data) =>{

    }

    const onClick = () =>{
        setIsBtnClicked(true)
    }

    return (
        <form className='form-container' onSubmit={handleSubmit(onSubmit)} noValidate id='contact'>
            <div className='form'>
                <Title size='small'>35.000+ ALREADY JOINED</Title>
                <Title size='form'>Stay up-to-date with what we’re doing</Title>
                <div className='form__input'>
                    <input type="email" placeholder='Enter your email address' {...register('email',{
                        required:true,
                        pattern:  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
                    })}></input>
                    {(Object.keys(errors).length === 0 && isBtnClicked) && <i className="fa-solid fa-circle-check"></i>}
                    {(Object.keys(errors).length != 0 && isBtnClicked) && <i className="fa-solid fa-circle-exclamation"></i>}
                    {errors.email?.type === 'required' && <p className='form__alert'>You should write your email!</p>}
                    {errors.email?.type === 'pattern' && <p className='form__alert'>Email format is incorrect</p>}
                    {(Object.keys(errors).length === 0 && isBtnClicked) && <p className='form__alert'>Good! Your email address looks valid.</p>}
                    <button type='submit' className='button button--box button--red' onClick={onClick}>Contact us</button>
                </div>

            </div>      
        </form>
    );
}

export {Form};