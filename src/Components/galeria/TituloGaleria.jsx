import React from 'react'

export const TituloGaleria = () => {
  return (
    <div style={styles.container} >
    <h1 style={styles.titulo}>Ropa Exclusiva</h1>
    <h2 style={styles.titulo}>Ropa Exclusiva de marcar reconocidas en el mundo</h2>
    </div>
    )
}



const styles = {
    container:{
        display: 'flex',
        marginTop:'30px',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column'
    },
    titulo:{
  
    color:'red',
  }
};