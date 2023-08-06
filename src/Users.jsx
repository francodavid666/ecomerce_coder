import React, { useState } from 'react'
import { useActionData } from 'react-router-dom'
import { UsersList } from './UserList';

export const Users= ()=>{

    const [nombre,setNombre] = useState('');
    const [lista,setLista] = useState([]);

    const handlerChange = (e)=>{
        setNombre( e.target.value)
    }
    
    const handlerClick =()=>{
       setLista([...lista,nombre])
       //se utiliza el '...' para hacer una copia de la lista
    }
    
    const funcionDelete=(nombre)=>{
        setLista(lista.filter((usuario)=>usuario !==nombre))
    }

    return(
        <div>
       <input type="text" value={nombre} onChange={handlerChange}/>    
       <button onClick={handlerClick} >Agregar</button>


       <UsersList lista={lista} funcionDelete={funcionDelete} />

        </div>
     
    )
}