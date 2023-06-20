import React from 'react';
import './Navbar.css'
import castillo_logo from '../../img/castillo_logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

                                                 //palabra reservada para obtener los props que ex  porto
 const Navbar = ({nombreUsuario, apellidoUsuario,children})=>{

      return( 
      <header style = {style.container}>
        
      
  
    <img src= {castillo_logo} style={style.logo}/>
    <h1 style={style.titulo}>Bienvenido {nombreUsuario} {apellidoUsuario} </h1>
   
    {children}

    </header>
    );


    

  };

export default Navbar


const style = {

  container:{
    display: 'flex',
    color:' rgb(197, 84, 8)',
    backgroundColor: 'rgb(67, 67, 210)',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    width: '100%',
    backgroundColor:'#0B2447',
  },
  logo:{
    width: '5%',
    marginLeft: 50,
  },
  categorias:{
    margin: 10,
    color:'red',
  },
titulo:{
  color:'#A5D7E8',
  fontSize: 20
}

}



