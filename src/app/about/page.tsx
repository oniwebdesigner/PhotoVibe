import React from "react";
import AboutSection from "./AboutSection";
import Achievements from "./Achievements";
import Footer from "@components/footer/Footer";


export default function page() {
  return (
    <div>
        <AboutSection></AboutSection>
        <Achievements></Achievements>
        <Footer></Footer>
    </div>
  )
}
