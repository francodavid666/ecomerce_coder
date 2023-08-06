import React from 'react'


export const AddButton = () => {
  return (
    <>   
    
    <button style={styles.addButton}>
      <p style={styles.textButton}>Añadir</p></button>
    </>
    
 
  )
}


const styles={
  addButton:{
    color: 'white',
    width: '55px',
    height: '20px',
    border: 'none',
    borderRadius: '15px',
    backgroundColor: 'rgb(50, 50, 50)',

    position: 'relative',
    left:'60%',
    top: '10px',
    zIndex:'2',
    cursor: 'pointer',
    border:'solid grey 1px'
  },
  textButton:{
    fontSize: '12px',
    background: 'linear-gradient(to right,#ff0000, #B31312,#ff0000)',
    webkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  }
}
