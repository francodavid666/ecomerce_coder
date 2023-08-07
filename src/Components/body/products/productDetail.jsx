import React from "react";
import {useEffect, useState} from 'react';
import{Link, NavLink,useParams} from "react-router-dom"
import { CardContainer } from "./cardProduct/cardContainer";



export const ProductDetail=()=>{

   const {id}=useParams()
   const URL_BASE = 'https://fakestoreapi.com/products/'
   const URL_PRO = `https://fakestoreapi.com/products/${id}`

    const [product,setProducts] = useState([])

    useEffect(()=>{
        const productList = async()=>{
           const data = await fetch(URL_PRO)
           const product = await data.json()
          
           
           setProducts(product)
        }
        productList();
      }) 
     

      return(
        <>
         <div className="div-container" style={styles.divContainer}>
            <CardContainer/>
               
                     <div styles={styles.info_product} className="info-product">
                           <h3 styles={styles.info_product_h3} >{product.title}</h3>
                           <Link to="/category/electronics1" element={ProductDetail}>
                           <a>Ver mas</a>
                           </Link>
                           <p className="price" styles={styles.price}>${product.price}</p>
                           <button style={styles.button}>Anadir al carrito</button>
                     </div>
               
         </div>
        </>
      )

}

const styles = {
   divContainer:{
      backgroundColor:'red',
      display:'flex',
      alingItems:'center',
      justifyContent:'center',
   },
   
    card_product:{
       flex: '25%',
       display: 'flex',
       flexDirection: 'column',
       marginTop: '20px',
       marginBottom: '20px',
    
       borderRadius: '15px',
       border:'1px solid black' ,
       height:'400px',
       
    },
 
 
    info_product:{
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'flex-start',
       alingItems:'center',
       padding: '15px 30px',
       height: '100%',
     },
     
     info_product_h3:{
       color: '#777',
       fontWeight: '500',
     },
     
     
     price:{
       color: '#000',
       fontWeight: '700',
       margin: '15px 0',
     },
     
    button:{
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    display: 'block',
    width: '60%',
    padding: '15px 0',
    cursor: 'pointer',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '15px',
    borderRadius: '15px',
  }
  
 }