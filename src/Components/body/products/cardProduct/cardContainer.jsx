import React from 'react';
import { FigureContainer } from './figureComponent';

export const CardContainer=()=>{
    return(
        <>
        <div className="card-product" style={styles.card_product}>
            <FigureContainer></FigureContainer>
        </div>
        </>
    )

}


const styles={
    container_products:{
        display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))',
    margin: '20px',
    gap: '20px',
     },
}