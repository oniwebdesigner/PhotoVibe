import React from 'react'
import Background from './background'
import Text from './text'
import Album from './Grid'
import Footer from '@components/footer/Footer'
import Grid from './Grid'
import CameraWithFlash from '@components/heroSection/CameraWithFlash'

export default function page() {
  return (
    <div>
        <Background></Background>
        <Text></Text>
        <CameraWithFlash></CameraWithFlash>
       <Grid></Grid>
        <Footer></Footer>
        
    </div>
  )
}
