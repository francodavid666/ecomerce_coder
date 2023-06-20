import React, { useState } from 'react'

export const Usuarios = ()=>{
                                    //Plantilla para crear un estado
    const[usuarios, SetUsuarios] = useState([{nombre:'Nicolas',apellido:'Gomez'},{nombre:'Jonatan',apellido:'Reynoso'}])

    const mariano = {nombre:'Mariano'}

    const agregarMariano = ()=>{
        //los 3 punts '...' es para decir que me traige el contenido de la lista de usuarios y luego que me
        //agrege a mariano
        SetUsuarios([...usuarios,mariano]);
    }

    return(
        <div>
            <h1 style={estilos.titulo}>Usuarios</h1>
            <button onClick={agregarMariano}>Agregar Mariano</button>
            {           //map= estructura que tiene valores guardados y se los indentifica con llaves
                usuarios.map((usuario,indice)=>{
                            //En react cada componente de una lista debe tener una key                   
                    return <h1 key={indice}>{usuario.nombre}</h1>
                   
                    
                    
                })
            }
        </div>
    )
}


const estilos= {
    titulo:{
        color:'red',
        backgroundColor:'blue',
    },
}