"use state";
import React from 'react';
import HeroSection from '@components/heroSection/HeroSection';
import NavBar from '@components/navBar/NavBar';


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <HeroSection />
      </div>
      
    </div>
  );
}
