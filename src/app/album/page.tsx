import React from 'react'
import Background from './background'
import Text from './text'
import Album from './Grid'
import Footer from '@components/footer/Footer'
import Grid from './Grid'
import CameraWithFlash from '@components/heroSection/CameraWithFlash'
import CameraIcon from '@components/heroSection/CameraIcon'

export default function page() {
  return (
    <div>
        <Background></Background>
        <Text></Text>
       <CameraIcon></CameraIcon>
       <Grid></Grid>
        <Footer></Footer>
        
    </div>
  )
}
