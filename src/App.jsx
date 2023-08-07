import React, { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom';


import { ProductsList } from './Components/body/products/ProductList';
import { Cart } from './Components/body/products/Cart';
import {ProductDetail } from './Components/body/products/productDetail';
import { ComponenteEvento } from './ComponenteEvento';
import { Users } from './Users';
import { ComponenteBanner } from './Components/banner/ComponenteBanner';
import { ComponenteLogosMain } from './Components/logosMain/ComponenteLogosMain';
import { TituloGaleria } from './Components/galeria/TituloGaleria';
import { Galeria } from './Components/galeria/Galeria';
import { ContainerVideo } from './Components/ContainerVideo/ContainerVideo';
import { FliperComponente } from './Components/fliper/FliperComponente';
import { ImagenesBody } from './Components/ImagenesBody/ImagenesBody';
import { DescripcionComponent } from './Components/descriptionComponent/descripcionComponent';
import { ComponenteBannerFooter } from './Components/BannerFooter/ComponenteBannerFooter';




const App = ()=>{
    const [show,setShow]= useState(true)

    const alternarFalse=()=>{
      /*este setShow va a cambiar un estado y va a altenar al show*/
      setShow(false);
    }

    const alternarTrue=()=>{
      /*este setShow va a cambiar un estado y va a altenar al show*/
      setShow(true);
    }

    const nombre = 'Luis';

    const edad = 27
    const onAdd = (contador)=>{
      alert(`El usuario quiere agregar ${contador} al carrito`)
    }
    return ( 
    <>
    <BrowserRouter >
          <Navbar funcionFalse={alternarFalse} funcionTrue={alternarTrue}  nombreUsuario = {nombre} apellidoUsuario = 'Fernandez'/>
            <Routes>
              <Route path='/category/:id' element ={<ProductsList/>}  />
              <Route path='/category/products/:id' element={<ProductDetail/>}  /> 
  
            </Routes>
     

    </BrowserRouter> 
    { show?
             <body style={styles.body} >
             <ComponenteBanner/>
             <ComponenteLogosMain/>
          

            <section style={ styles.sectionTituloGaleria}>
            <TituloGaleria/>
            </section>

            <section style={ styles.sectionGaleria}>
            <Galeria/>
            </section>

            <section>
              <ContainerVideo/>
            </section>

            <FliperComponente/>


              <ImagenesBody/>
              <DescripcionComponent/>


<footer>
<ComponenteBannerFooter></ComponenteBannerFooter>
</footer>
          </body>:null }
    </>
    );

  
  };






export default App;






const styles={
  body:{backgroundColor: '#272727',
  width:'100%',
  height: '100vh',
  },
  banner:{
    backgroundColor:'red',
    height:'300px',
    width:'98%',
  },
  sectionTituloGaleria:{
    display: 'flex',
    marginTop:'30px',
    backgroundColor: 'rgb(67, 67, 210)',
    alignItems: 'center',
    justifyContent: 'start',
    height: 100,
    width: '100%',
    height:'100px',
    flexDirection:'column'
  },
  sectionGaleria:{
    display: 'flex',
    marginTop:'30px',
    alignItems: 'center',
    justifyContent: 'start',
    height: 100,
    width: '100%',
    height:'auto',
    flexDirection:'column'
  },
 
}

