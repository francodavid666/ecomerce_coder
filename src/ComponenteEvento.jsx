import React, { Children } from 'react'


export const ComponenteEvento = ({children}) =>{
    const callback =(mensaje)=>{
        alert('click')
    }

    const handlerChange =(event)=>{
        console.log(event.target);
    }
    return(
        <>
           <h2>ComponenteEvento</h2> 
           <button onClick={ callback}>Evento</button>
           <input type="text" onChange={handlerChange} />
        </>
    )
}


