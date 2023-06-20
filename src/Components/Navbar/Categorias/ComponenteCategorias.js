import React from 'react';


export const ComponenteCategorias = ()=>{
   
  const categorias=[
    {nombre:'Categoria 1', id:0,  ruta:'#'},
    {nombre:'Categoria 2', id:1,  ruta:'#'},
    {nombre:'Categoria 3', id:2,  ruta:'#'},
    {nombre:'Categoria 4', id:3,  ruta:'#'},
  ];

return(
    <nav>
    {categorias.map((categoria)=>{
      return  <a style = {style.categorias}key={categoria.id}href={categoria.ruta}> {categoria.nombre}</a>
    })}
  </nav>
)
}



const style = {
    container:{
      display: 'flex',
      color:'red',
      backgroundColor: 'rgb(67, 67, 210)',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 100,
      width: '100%',
   
     
    },
    logo:{
      width: '5%',
      marginLeft: 50,
    },
    categorias:{
      margin: 10,
      color:'white',
      font: 'none',
      textDecoration : 'none',
    },
  
  }