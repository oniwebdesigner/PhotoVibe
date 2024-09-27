import React from 'react'
import HeroSection from '@components/heroSection/HeroSection'
import Photographs from '@components/heroSection/photographs'
import Footer from '@components/footer/Footer'
//import Spider from '@components/heroSection/Spider'
import Text from 'app/album/Text'
import GridPhotographers from '@components/heroSection/GridPhotographs'



export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection> 
      
      <Photographs></Photographs>

      <GridPhotographers></GridPhotographers>

      <Footer></Footer>
      
    
    </div>
  )
}