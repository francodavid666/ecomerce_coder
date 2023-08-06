import React from 'react'

export const ComponenteText1= () => {
  return (
    <div style={styles.text}>
                <h2 style={styles.title} >Our technical fabrics are made of waste</h2>
                <h3 style={styles.titleSecundary} >70-100%​</h3>
                <p style={styles.description} >RECYCLED POLYESTER</p>
              </div>
    )
}


const styles={
    text:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'column',
        color:'white',
        height:'90%',
 
        textAlign:'center',
        width:'49%',
        
      },

  title:{
  marginBotton:'15px',
  fontSize: '30px'
},
titleSecundary:{
fontSize:'45px'
},
description:{
    fontSize: '10px',
}

}
  