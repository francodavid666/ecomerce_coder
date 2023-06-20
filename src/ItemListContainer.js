import React ,{ useEffect, useState }from 'react';
import { ItemList } from './Components/ItemList/ItemList';


const tecnologia=[
    {nombre: 'Silla Gamer Reclinable', id:0, categoria:'Sillas',stock:10,precio:46.500,img:'https://http2.mlstatic.com/D_NQ_NP_722790-MLA53086240134_122022-V.webp'},
    {nombre: 'Teclado Bluetoth Redragon Fizz', id:1, categoria:'Telcado',stock:20,precio:22.999,img:'https://http2.mlstatic.com/D_NQ_NP_709944-MLA51984562627_102022-O.webp'},
    {nombre: 'Teclado Logitech', id:2, categoria:'teclado',stock:30,precio:4099, img:'https://http2.mlstatic.com/D_NQ_NP_710520-MLA43874063913_102020-V.webp'},
    {nombre: 'Mouse Loguitech', id:3, categoria:'mouse',stock:40,precio:9.999,img:'https://http2.mlstatic.com/D_NQ_NP_779763-MLA45385615296_032021-V.webp'},
   
]




export const ItemListContainer=({stock,initial,onAdd})=>{

const productos = tecnologia
 
  return(
   
        <div>
        <h2>afuera de lista</h2>
      <ItemList>
        <productos/>
      </ItemList>
    
       
        </div>
 
  )
   

}

