import React from 'react'

// Componente

export const ComponenteBody = () =>{
    return (
        <body style={estilos.body_estilos}>
        <h1 style={estilos.color}> Este es el body</h1>
        <h2>segundo titulo</h2>
        <h2>segundo titulo</h2>
        <h2>segundo titulo</h2>
        </body>
    )
}



  
  //Sus estilos
  
  const estilos = {
    color:{
      backgroundColor:'#A5D7E8',
    },
    body_estilos:{
        backgroundColor:'red',
        height: 200,
        color: 'white',
    },

  }