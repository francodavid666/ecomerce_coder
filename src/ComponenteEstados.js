import React, { useState, useEffect} from 'react';

export const ComponenteEstados = ({stock,initial,onAdd})=>{

    const[contador, setContador] = useState(1);
    const[numero, setNumero] = useState(0);


    console.log('Se ejecuta el constructor')
    
    useEffect(()=>{
        console.log('Se ejecuta el useEffect');
        setNumero(numero +1);
    },[contador]);
    
  
 
    const handlerClick = ()=>{
        setContador(contador + 1);
        onAdd()
      
            
    };




    const restar = ()=>{
        setContador(contador - 1);
    }


    return(
        <div>
        <h1>Componente para los estados</h1>
        <h1>{numero}</h1>    
        <h1>{contador}</h1>    
        <button onClick={handlerClick} >Sumar</button>
        <button onClick={restar}>Restar</button>
        </div>
    );
};