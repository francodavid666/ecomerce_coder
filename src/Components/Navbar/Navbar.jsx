import React from 'react';
import './Navbar.css'
import logo from '../../img/logo_sFondo.png'
import {useSpring, animated} from '@react-spring/web'
import{Link, NavLink} from "react-router-dom"
import { ButtonSingUp } from './Buttons/ButtonSingUp';
import { ButtonLogin } from './Buttons/ButonLogin';
import arrowDown from '../../img/icons/arrow_down.png'
import { MenuHorizontal } from './menuHorizontal/menuHorizontal';


const categorias=[
  {nombre: "electronics", id:0,  ruta:'/category/electronics'},
  {nombre: "jewelery", id:1,  ruta:'/category/jewelery'},
  {nombre:"men's clothing", id:2,  ruta:"/category/men's clothing"},
 ,
];

//palabra reservada para obtener los props que ex  porto


 const Navbar = ({children,funcionFalse,funcionTrue})=>{

  const fade = useSpring({from:{opacity:0}, opacity:1})

      return( 
    <header style = {style.container}>
    <Link to="/cart" style={style.link}>
    <animated.img src= {logo} style={fade}  onClick={funcionTrue}/>
    </Link>
     

    <nav style={style.navbar} >
    {categorias.map((categoria)=>{
      return  (
        
        <ul class='menu-horizontal'>
       <li> <NavLink  onClick={funcionFalse} className='linkNav' style={style.categorias}key={categoria.id} to={categoria.ruta}> {categoria.nombre}  </NavLink> 
       </li>
       </ul>
      )
    })}

    <MenuHorizontal/>
    </nav>
     
    
   

    <ButtonSingUp></ButtonSingUp>
    <ButtonLogin></ButtonLogin>
    {children}

    </header>
    );


    

  };

export default Navbar


const style = {

  container:{
    display: 'flex',
    color:' rgb(197, 84, 8)',
    backgroundColor: '#272727',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    width: '100%',
    
  },
  logo:{
    width: '120px',
    marginLeft: 10,
    marginWidth: 20,
    transition: '2s'

  },
  categorias:{
    margin: 10,
    textDecoration:'none',
    padding: '10px',
  },
titulo:{
  color:'#A5D7E8',
  fontSize: 20
},
link:{
  width:'150px',
},

   navbar:{
    padding:'20px',
    width:'60%',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
   }
}



/*  a.buttonLogin:hover{
  backgroundColor: '#595959',
}
a.buttonLogin:active{
 transform: 'scale(0.95'),
}*/


/* <h1 style={style.titulo}>Bienvenido {nombreUsuario} {apellidoUsuario} </h1>*/ 
/* {nombre:"women's clothing", id:3,  ruta:"/category/women's clothing"}*/ 