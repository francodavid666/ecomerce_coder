import React from 'react'
import videoPromocional from '../../videos/videoPromocional.mp4'
import { height } from '@mui/system'

export const ContainerVideo = () => {
  return (
    <>
    <div style={styles.container}>
        <div style={styles.containterVideo}>
          <video width="640" height="360" controls>
              <source src={videoPromocional} type="video/mp4" />
          </video>
        </div>
    </div>
      </>
  )
}


const styles={
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    alingContent:'center',
    marginTop:'30px',
    backgroundColor:'white',
    height:'500px'
  },
  containterVideo:{
    backgroundColor: '#272727',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'95%',
    height:'90%'
  },
}
