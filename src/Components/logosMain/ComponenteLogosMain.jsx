import React from 'react'
import logoAdidas from '../../img/icons/adidas100.png'
import logoNike from '../../img/icons/nike100.png'
import logoFila from '../../img/icons/fila67.png'
import logoJordan from '../../img/icons/jordan100.png'



export const ComponenteLogosMain= () =>{

const icons =[
   {imagen: logoJordan},
   {imagen: logoFila},
   {imagen: logoNike},
   {imagen: logoAdidas},
];


    return(
       
    <div style={styles.main_container}>
        {icons.map((icon)=>{
            return(
                <img src={icon.imagen} alt="" style={styles.icons} />
            )
        })}
    </div>
      
        
    )
}



const styles={
    main_container:{
     
        marginTop:'20px',

        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
    },
    icons:{
        width: '100px',
    }

}