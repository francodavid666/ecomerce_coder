import React from "react";
import {useEffect, useState} from 'react';
import{Link, NavLink,useParams} from "react-router-dom"



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
   
        <div className="card-product" style={styles.card_product}>
         <h2>{id}</h2>
                  <figure className="container-img" style={styles.container_img}>
                     <img style={styles.container_img_img} src={product.image} alt={product.title} />
                  </figure>
                  <div styles={styles.info_product} className="info-product">
                     <h3 styles={styles.info_product_h3} >{product.title}</h3>
                     <Link to="/category/electronics1" element={ProductDetail}>
                     <a>Ver mas</a>
                     </Link>
                     <p className="price" styles={styles.price}>${product.price}</p>
                     <button style={styles.button}>Anadir al carrito</button>
                     <h2>{product.id}</h2>
                  </div>
               </div>
      
        </>
      )

}

const styles = {
    container_products:{
       display: 'grid',
   gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))',
   margin: '20px',
 
   gap: '20px',
    },
    card_product:{
       flex: '25%',
       display: 'flex',
       flexDirection: 'column',
       marginTop: '20px',
       marginBottom: '20px',
    
       borderRadius: '15px',
       border:'1px solid black' ,
       height:'400px'
    },
    container_img:{
       flex: 1,
       display:'flex',
       width: '100%',
       height: '60%',
    
    },
    container_img_img:{
       width: '100%',
       height: '90%',
       objectFit: 'contain',
       borderRadius: '15px',
      
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