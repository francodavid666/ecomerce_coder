import React, { useState } from 'react'
import './styleMenuHorizontal.css'


import {useSpring, animated} from '@react-spring/web'

export const MenuHorizontal = () => {

    const [handleClick,setHandleClick]=useState(false)
    
    const openMenu= useSpring({display:handleClick ? 'block':'none' })
    
    const fade = useSpring({backgroundColor:handleClick ? 'black':'rgba(255, 255, 255, 0)'});

   
  return (
    <>
    <ul class='menu-horizontal'>
    <li >
        <animated.button  style={fade} class='button-zapatillas' onClick={()=>setHandleClick(!handleClick)} >Zapatillas</animated.button>
    <animated.ul style={openMenu}  class='menu-vertical' >
      <li><a href="#"></a> Nike</li>
      <li><a href="#"></a>Adidas</li>
      <li><a href="#"></a>Fila</li>
      <li></li>
    </animated.ul>
    </li>

</ul>
</>
  )
}
