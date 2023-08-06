import React, { useState } from 'react'
import '../../styles/carrouselAlice.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import gorro from '../../img/ropa/gorro2.jpg'
import corazon from '../../img/icons/heart.png'

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0:{items:1},
  568: {items:3},
  1024:{items:5},
};




export const FliperComponente = () => {

const [liked,setLiked] =useState(false)

 const handleLike =()=>{
   setLiked(!liked);

 }


 const items = [
  <div class='card'>  
    <img src={gorro} class='imgCard' onDragStart={handleDragStart} role="presentation" />
      <div class='contenidoCard'>
        <button className='like-button' onClick={handleLike} >
          <FontAwesomeIcon icon={faHeart}   color={liked ? 'red':'grey'}/>        </button>
        <h2 class='tituloCard'>Gorra de lana Under</h2>
        <h1 class='precioCard' >$3200</h1>
        <a href="#" class='linkCard'>Ver</a>
      
      </div>
  </div>,
  
  <img src={gorro} class='item' onDragStart={handleDragStart} role="presentation" />,
  <img src={gorro} class='item' onDragStart={handleDragStart} role="presentation" />,
  <img src={gorro} class='item' onDragStart={handleDragStart} role="presentation" />,
  <img src={gorro} class='item' onDragStart={handleDragStart} role="presentation" />,
  <img src={gorro} class='item' onDragStart={handleDragStart} role="presentation" />,
];

  return (
    <>
       
    <AliceCarousel 
     style={styles.aliciaCarrusel}
    mouseTracking items={items}
    infinite={true}
    disableButtonsControls={true}
    disableDotsControls={true}
    responsive={responsive}
    animationDuration={2000}
    autoPlayInterval={1000}
    animationType={'slide'}
    autoPlay={false} />
 
    </>
   ) 
}

const styles={
  aliciaCarrusel:{
    backgroundColor:'red',
    borderRarius:'15px'
 
  }
}
