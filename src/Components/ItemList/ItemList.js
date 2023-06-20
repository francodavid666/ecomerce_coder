import { ConnectedTvOutlined } from '@mui/icons-material';
import React, { Children } from 'react';


const mouse =[
    {nombre: 'Silla Gamer Reclinable', id:0, categoria:'Sillas',stock:10,precio:46.500,img:'https://http2.mlstatic.com/D_NQ_NP_722790-MLA53086240134_122022-V.webp'},

]

export const ItemList= (productos,Children)=>{

  

/*console.log(productos)
console.log(productos)*/
  
   
   
   return(
    <div>
        <h1>hola</h1>
        {
            mouse.map((producto)=>{
                return(
                    <h2 key={producto.id}>{producto.nombre}</h2>
                )
            })
        }
      
    </div>
   )




}