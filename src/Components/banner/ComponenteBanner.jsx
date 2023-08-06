import React, { Children } from 'react'
//ropa de la rocka
import backgound_banner from '../../img/rock_ropa.jpg'


const url = {backgound_banner}
export const ComponenteBanner = ({children}) =>{
    return(
       
    <>
     <div style={styles.banner_container}>
        <div style={styles.banner}>

      </div>

      </div>
      </>
        
    )
}




const styles={
    banner_container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
      
    },
    banner:{
      backgroundColor:'red',
      height:'400px',
      width:'100%',
      
   
      backgroundImage: `url('https://hips.hearstapps.com/hmg-prod/images/dwayne-johnson-under-armour-1599035456.jpg?crop=1.00xw:0.753xh;0,0.135xh&resize=1200:*')`,
      backgroundRepeat:'no-repeat',
      backgroundPosition: 'center',
      backgroundSize:'cover',
    }
  }