import React from 'react'

export const ComponenteText2= () => {
  return (
    <div style={styles.text}>
    <h2  style={styles.title}>Sustainably producedp</h2>
    <h3 style={styles.titlesecundary}  >REDUCE, REUSE, REPAIR, RECYCLE</h3>
    <p  style={styles.paragraph}>Further on, 95% of this are Bluesign certified – which guarantees that harmful substances are eliminated, natural resources are managed responsibly, water, air emissions and wastewater are continuously being reduced and those actions in general supports a lowest possible ecological footprint and safety for people involved.</p>             
    <a href="#" style={styles.learnMore}>LEARN MORE</a>
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
  fontSize: '30px'
},
titlesecundary:{
  fontSize: '12px'
},
paragraph:{
  lineHeight:'20px',
  fontSize: '12px',
  width:'70%'
},
learnMore:{
  textDecoration:'none',
  textDecoration:'underline',
  color:'white',
  fontSize: '10px',
}
}