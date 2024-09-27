import React from "react";
import AboutSection from "./AboutSection";
import Achievements from "./Accordinos";
import Footer from "@components/footer/Footer";
import Accordions from "./Accordinos";


export default function page() {
  return (
    <div>
        <AboutSection></AboutSection>
        <Accordions></Accordions>
        <Footer></Footer>
    </div>
  )
}
