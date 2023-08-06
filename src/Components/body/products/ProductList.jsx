import { Pagination } from '@mui/material';
import React, {useEffect, useState} from 'react';

import { useParams } from 'react-router-dom';
import{Link, NavLink} from "react-router-dom"

import axios from 'axios';
import { ProductDetail } from './productDetail';
import { AddBox } from '@mui/icons-material';
import { AddButton } from './addButton/addButton';
import { LikeButton } from './likeButton/likeButton';




export const ProductsList= ()=>{

     const [products,setProducts] = useState([])
     //cuantos productos yo quiero por pagina
     const [productsPerPage,setProductsPerPage] = useState(6)
     //un estado para la pagina actual
     const [currentPage,setCurrentPage] = useState(1)

     
//es un hook que me facilita la informacion de la ruta,,recie lo que yo mando por la ruta
     const {id}= useParams();
     

     const URL_BASE =  'https://fakestoreapi.com/products'
     const URL_CAT = `${URL_BASE}/category/${id}`
     const URL_PRO = `${URL_BASE}/${id}`

   
   
     

    useEffect(()=>{
      const productList = async()=>{
         const data = await fetch(URL_CAT)
         const products = await data.json()
         
         setProducts(products)
      }
      productList();
    },[id]) 



    const getSingleProduct = async()=>{
      try{
         const res = await axios.get("https://fakestoreapi.com/products/:id");
         const products = await res.data;
      } catch (error){}
    };
    
     return(
       <>
       <div className="container-products" style={styles.container_products}>
         {products.map(product =>{
            return(
               <div className="card-product" style={styles.card_product}>
                  <figure className="container-img" style={styles.container_img}>
                     <img style={styles.container_img_img} src={product.image} alt={product.title} />
                     <LikeButton></LikeButton>
                     <AddButton></AddButton>
                  </figure>
                  <div style={styles.info_product} className="info-product">
                  <h3 style={styles.description} >Zapatillas</h3>
                     <h3 style={styles.title} >{product.title}</h3>
                   
                    
                     <p className="price" style={styles.price}>${product.price}</p>
                      
                     <Link style={styles.verMas} to={`/category/products/${product.id}`} element={ProductDetail}>
                              <a style={styles.verMasClass}>Ver mas</a>
                              </Link>

                
             
                  </div>
               </div>
            )

         })}
       </div>
       <Pagination></Pagination>
       </>
     )
};

const styles = {
   container_products:{
      display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))',
  margin: '20px',
  backgroundColor: '#272727',
  gap: '20px',
   },
   card_product:{
      flex: '25%',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '20px',
      marginBottom: '20px',
      backgroundColor: '#272725',
      borderRadius: '15px',
      boxShadow: '0px 0px 30px -5px rgba(0,0,0,1)',
      height:'400px',
  
      color:'white',
   },
   container_img:{
      flex: 1,
      width: '100%',
      height: '270px',
      borderBottom: 'solid black 1px'
   
   },
   container_img_img:{
      width: '100%',
      height: '220px',
    
      objectFit: 'contain',
      borderRadius: '15px',
     
   },

   info_product:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alingItems:'center',
   
      height: '100%',
      color:'white',
      marginLeft:'10px',
    },
    
    title:{
      color: 'white',
      fontWeight: '550',
      fontSize:'17px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',      
    },
    verMas:{
      textDecoration:'none',
      color: 'white',
      fontWeight: '700',
    
      fontSize:'15px'
      
      
    },
    
    price:{
      color: 'white',
      fontWeight: '700',
      marginTop: '60px',
    },
    
   button:{
   backgroundColor: '#000',
   color: 'white',
   border: 'none',
   display: 'block',
   width: '20%',
   padding: '15px 0',
   cursor: 'pointer',
   marginTop: 'auto',
   marginLeft: 'auto',
   marginRight: 'auto',
   marginBottom: '15px',
   borderRadius: '15px',
 },
 description:{
  fontSize: '12px',
  color:'grey',
  marginTop:'10px',
  marginBottom:'10px'
 },
 verMasClass:{

   background: 'linear-gradient(to right,  #ff0000, #B31312,#ff0000)',
   WebkitBackgroundClip: 'text',
   backgroundClip: 'text',
   color: 'transparent',
 },
 
}


/*      <button style={styles.button}>Anadir al carrito</button>*/
