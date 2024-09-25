import React from 'react'
import HeroSection from '@components/heroSection/HeroSection'
import Photographs from '@components/heroSection/photographs'
import Footer from '@components/footer/Footer'
import App from '@components/App'



export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection> 
      <Photographs></Photographs> 
      <Footer></Footer>
      <App></App>
    </div>
  )
}