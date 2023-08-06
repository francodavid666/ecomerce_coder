import React, { useState, useEffect} from 'react';

export const C_estado_1 = ({})=>{


    
    const[likes,setLikes] = useState(5);
    const[numero,setNumero] = useState(0)
 
 


 
    const clickSumar = ()=>{
        setLikes(likes +1);
    }

    
    useEffect(()=>{
        console.log('efects')
        setNumero(numero +1);
           
    const intervalo =  setInterval(() => {
        console.log('ping') ;
     }, 1000);
    
     return(()=>{
         clearInterval(intervalo)
     });
    },[likes])

    const clickRestar = ()=>{
        setLikes(likes -1)
    }


    return(
     <div>
        {likes}
        <button onClick={clickSumar}>boton sumar</button>
        <button onClick={clickRestar}>boton restar</button>
        {numero}
      


     </div>
    );
};

//ternario es una expresion (tiene un return explicito)

//const numero =condicion ? (esto):(esto otro)