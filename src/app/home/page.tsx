import React from 'react'
import HeroSection from '@components/heroSection/HeroSection'
import Photographs from '@components/heroSection/photographs'
import Footer from '@components/footer/Footer'



export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection> 
      <Photographs></Photographs> 
      <Footer></Footer>
    </div>
  )
}