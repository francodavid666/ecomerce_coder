import React from 'react'



import ropa1 from '../../img/ropa/ropa1.webp'
import ropa2 from '../../img/ropa/ropa2.webp'
import ropa3 from '../../img/ropa/ropa3.webp'

const images = [
  { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16/9 },
  { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16/9 },
]
const widths = [ 500, 1000, 1600 ]
const ratios = [ 2.2, 4, 6, 8 ]


const imagenes= [
  {nombre:'ropa1'},
]

export const GaleriaLibreria = () => {

return(
  <div>
    <h2>lbreria</h2>
  </div>
)
  
}



const styles = {
    container:{
      backgroundColor: 'red',
      width:'98%',
      height:'80%',
      display:'flex',
      alignItems: 'start',
      justifyContent: 'center'
    },
    titulo:{
    color:'green',
  },
  carta:{

  },
};