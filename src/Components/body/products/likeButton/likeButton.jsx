import React from 'react'

export const LikeButton = () => {
  return (
    <>   
    
    <button style={styles.likeButton}>
      <p style={styles.textLikeButton}>Like</p></button>
    </>
    
 
  )
}


const styles={
  likeButton:{
    color: 'white',
    width: '55px',
    height: '20px',
    border: 'none',
    borderRadius: '15px',
    backgroundColor: 'rgb(50, 50, 50)',

    position: 'relative',
    left:'55%',
    top: '10px',
    zIndex:'2',
    cursor: 'pointer',
    border:'solid grey 1px'
  },
  textLikeButton:{
    fontSize: '12px',
    background: 'linear-gradient(to right,#ff0000, #B31312,#ff0000)',
    webkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  }
}
