import React from 'react'

import { GaleriaLibreria } from './GaleryLibreria';
import image1 from '../../img/ropa/ropa1.webp'
import image2 from '../../img/ropa/ropa2.webp'

const photos = [
 
  {
      src: `${image1}`,
      width: 1600,
      height: 900
  },
  {
    src: `${image2}`,
    width: 1600,
    height: 900
},

];

export const Galeria = ({children}) => {
  return (
    <>
 
      <ul style={styles.container}>
      <li >
      <img   style={styles.imgCard} src="https://p4.wallpaperbetter.com/wallpaper/973/896/874/fitness-gym-dumbbells-sportswear-wallpaper-preview.jpg" alt="" /> 

      <div style={styles.contenidoCarta}> 
            <h1>Titulo</h1>
            <h2>precio</h2>
            <a href="#">Ver mas</a>
          </div>
      </li>
      <li >
      <img  style={styles.imgCard} src="https://p4.wallpaperbetter.com/wallpaper/973/896/874/fitness-gym-dumbbells-sportswear-wallpaper-preview.jpg" alt="" /> 

      <div style={styles.contenidoCarta}> 
            <h1>Titulo</h1>
            <h2>precio</h2>
            <a href="#">Ver mas</a>
          </div>
      </li>
      <li >
      <img  style={styles.imgCard} src="https://p4.wallpaperbetter.com/wallpaper/973/896/874/fitness-gym-dumbbells-sportswear-wallpaper-preview.jpg" alt="" /> 

      <div style={styles.contenidoCarta}> 
            <h1>Titulo</h1>
            <h2>precio</h2>
            <a href="#">Ver mas</a>
          </div>
      </li>
      </ul>
    </>
    )
}



const styles = {
    container:{
      width:'98%',
      display:'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap:'16px',
      alignItems:'center',
      listStyle:'none',
      

    },
    titulo:{
    color:'green',
  },
  card:{
      width:'300px',
      height:'400px',
      display:'flex',
      alignItems: 'start',
      justifyContent: 'center',
      backgroundColor:'blue',
      flexDirection:'column',
      borderRadius:'16px',
   
  },
  contenidoCarta:{
    display:'none'
  },
  imgCard:{
    height:'100%',
    borderRadius:'16px',
  }
};

