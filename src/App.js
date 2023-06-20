import React, { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { ComponenteTitulo } from './ComponenteTitulo';
import { ComponenteBody } from './ComponenteBody';
import { ComponenteCategorias } from './Components/Navbar/Categorias/ComponenteCategorias';
import { ComponenteCarrito } from './Components/Navbar/Carrito/ComponenteCarrito';
import { ComponenteEstados } from './ComponenteEstados';
import { ComponenteBoton } from './ComponenteBoton';



const App = ()=>{



    const [show,setShow]= useState(true)

    const alternar=()=>{
      /*este setShow va a cambiar un estado y va a altenar al show*/
      setShow(!show);
    }

    const nombre = 'Luis';

  

    const edad = 27
    const onAdd = (contador)=>{
      alert(`El usuario quiere agregar ${contador} al carrito`)
    }


    
    
    return ( 
    <>
          <Navbar nombreUsuario = {nombre} apellidoUsuario = 'Fernandez' >
          <ComponenteTitulo/>
          <ComponenteCategorias/>
        
          <ComponenteCarrito/>
          </Navbar>
      

            <body>
              {show ?<ComponenteEstados/>:<h1>Aca no hay nada</h1>}
              <button onClick={alternar}>Alternar</button>
          

          <ComponenteEstados/>

      
          </body>
    </>
    );

  
  };






export default App;






