import React from 'react'
import HeroSection from '@components/heroSection/HeroSection'
import Photographs from '@components/heroSection/photographs'
import Footer from '@components/footer/Footer'
//import Spider from '@components/heroSection/Spider'
import Text from 'app/album/Text'



export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection> 
      
      <Photographs></Photographs>

      <Footer></Footer>
      
    
    </div>
  )
}