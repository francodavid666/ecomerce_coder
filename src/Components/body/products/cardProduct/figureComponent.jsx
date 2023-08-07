import React from 'react';

export const FigureContainer=()=>{
    return(
        <>
        <figure className="container-img" style={styles.container_img}>
                     <img style={styles.container_img_img} src={product.image} alt={product.title} />
                  </figure>
        </>
    )

}


const styles = {
   
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
    }