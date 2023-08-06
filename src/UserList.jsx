import React, { useState } from 'react'
import { useActionData } from 'react-router-dom'


export const UsersList= ({lista,funcionDelete})=>{

const handlekClickDelete =(nombre)=>{
    funcionDelete(nombre)
}

return(
   
        <ul>
           {lista.map((nombre,i)=>{
            return(
                <li>
                    <h2 key={i}>{nombre}</h2>
                    <button onClick={()=>handlekClickDelete(nombre)} >Eliminar usuario</button>
                </li>
            )
           })}
        
        </ul>
 
);

    
};