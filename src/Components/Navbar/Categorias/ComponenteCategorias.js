import React from 'react';
//son Link y Navlink son clases de boostrap
import{Link, NavLink} from "react-router-dom"


export const ComponenteCategorias = ({alternar})=>{
   
  const categorias=[
    {nombre: "electronics", id:0,  ruta:'/categoria/electronics'},
    {nombre: "jewelery", id:1,  ruta:'/categoria/ewelery'},
    {nombre:"men's clothing", id:2,  ruta:'/categoria/jewelery'},
    {nombre:"women's clothing", id:3,  ruta:"/categoria/women's clothing"},
  ];



return(
    <nav>
    {categorias.map((categoria)=>{
      return  <NavLink style = {style.categorias}key={categoria.id} to={categoria.ruta} onClick={alternar}> {categoria.nombre}</NavLink>
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