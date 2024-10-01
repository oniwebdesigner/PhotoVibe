import React from 'react'

import HeroSection from '@components/heroSection/HeroSection'
import Photographs from '@components/heroSection/photographs'
import Footer from '@components/footer/Footer'
import Text from 'app/album/Book'
import GridPhotographers from '@components/heroSection/GridPhotographs'
import ParallaxScene from '@components/heroSection/ParallaxScene'





export default function Home() {
  return (
    <div>
      
      {/* Div për menaxhimin e lartësisë dhe skrollimit */}
     
        <ParallaxScene />
    
      
      <HeroSection></HeroSection> 
      
      <Photographs></Photographs>

      <GridPhotographers></GridPhotographers>

      <Footer></Footer>
      
    
    </div>
  )
}