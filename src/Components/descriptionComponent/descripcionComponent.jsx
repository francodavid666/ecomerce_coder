import React from 'react'
import { ComponenteText1 } from './ComponentText1'
import { ComponenteText2 } from './ComponentText2'

export const DescripcionComponent = ({children}) => {
  return (
<>

    <div style={styles.container} >
       <ComponenteText1/>
            
    <div style={styles.column}></div>
        <ComponenteText2/>

              </div>
    </>
    )
}


const styles={
  container:{
    height:'400px',
    
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
 
 
  column:{
    backgroundColor:'grey',
    width:'2px',
    height:'70%',
    borderRadius:'20px'
  },

}
