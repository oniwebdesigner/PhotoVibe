import React from 'react'
import Background from './background'
import Grid from './Grid'
import Text from './text'
import Footer from '@components/footer/Footer'

export default function page() {
  return (
    <div>
        <Background></Background>
        <Text></Text>
        <Grid></Grid>
        <Footer></Footer>
        
    </div>
  )
}
