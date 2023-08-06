import react from 'react'
import telaNegra from '../../img/fondos/telaNegra.jpg'
import { positions } from '@mui/system'
import { ContenidoBanner } from './ContenidoBanner'

export const ComponenteBannerFooter=()=>{
return(
    <>
    <div style={styles.container} >
        <div  style={styles.containerHijo}>
        <ContenidoBanner/>
        </div>
    </div>
    </>
)
}


const styles={
    container:{
        height:'300px',
       backgroundImage:`url(${telaNegra})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
     
    },
    fondo:{
        width:'100%',
        height:'100%'
    },
    containerHijo:{
        color:'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        backgroundColor:'rgba(0, 0, 0, 0.25)',
        width:'100%',
        height:'100%',
        lineHeight:'70px'
    }
    
}
