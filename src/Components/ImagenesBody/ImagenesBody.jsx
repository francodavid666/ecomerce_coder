import { Height } from '@mui/icons-material'
import React from 'react'
import '../ImagenesBody/ImagenesStyles.css'
import jordan from '../../img/zapatillas/jodan1.jpg'
import under from '../../img/zapatillas/under.jpg'



export const ImagenesBody = () => {
  return (
    <>
    <div style={styles.container}>
        <div style={styles.imagen1}>
        <img src={under}  style={styles.imgs} class='imgs' alt="" />
          <div style={styles.text} >
            <h2  >under armour</h2>
            <p>Zapatillas unisex deportivas</p>
          </div>
        </div>


        <div style={styles.imagen1}>
          <img src={jordan}  style={styles.imgs} class='imgs'alt="" />
          <div style={styles.text} >
            <h2  >Jordans One</h2>
            <p>Las clasicas jordan one</p>
          </div>
        </div>
     
    </div>
     
    </>
 
  )
}

//las animaciones las hago en una hoja de css en la misma 
//carpeta que en el que esta el componente
const styles ={
  container:{

    marginTop:'50px',
    height:'600px',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  imagen1:{
    backgroundColor:'white',
    width:'49%',
    height:'95%',
  },

  imgs:{
    width:'100%',
    height:'85%',
    cursor:'pointer',
    
  },
  text:{
    textAlign: 'center',
    marginTop:'5px',
    lineHeight: '1.5' 
   }
}