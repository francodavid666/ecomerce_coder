import React, { useRef } from 'react';
import { useClickAnimation } from './useClickAnimation';
import './stylesLogin.css'


export  const ButtonSingUp= ()=>{
    const buttonRef = useRef();
    useClickAnimation(buttonRef,{duration:2000});
    

    return(
        <div class='button-container'>
        <button  ref={buttonRef} class='button'>
            Login
            </button>
        </div>
    )
}



