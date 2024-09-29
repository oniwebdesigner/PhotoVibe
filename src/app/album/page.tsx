import React from 'react'
import Background from './background'
import Text from './Book'
import Album from './Grid'
import Footer from '@components/footer/Footer'
import Grid from './Grid'



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
