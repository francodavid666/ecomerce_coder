import React, { useRef } from 'react';
import './stylesLogin.css'
import { Dvr } from '@mui/icons-material';
import { useClickAnimation } from './useClickAnimation';



export  const ButtonLogin= ()=>{

    const buttonRef = useRef();
    useClickAnimation(buttonRef,{duration:2000});
    

    return(
        <div class='button-container'>
        <button style={styles.buttonLogin} ref={buttonRef} class='button'>
            Login
            </button>
        </div>
    )
}



const styles ={
buttonLogin:{
  
   },
}