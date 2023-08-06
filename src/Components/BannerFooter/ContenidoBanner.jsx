import { Padding } from '@mui/icons-material'
import react from 'react'

export const ContenidoBanner=()=>{
return(
    <>
    <div >
 <h1>100% CALIDAD</h1>
 <h2>IDEAL PARA UN ESTILO URBANO</h2>
 <a href="#" style={styles.learnMore}>Leanr More</a>
    </div>
    </>
)
}


const styles={
    learnMore:{
        textDecoration:'none',
        color:'white',
        border:'white solid 2px',
        padding:'15px',
        paddingLeft:'30px',
        paddingRight:'30px',
    }
}

