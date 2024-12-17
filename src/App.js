import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";
import UpdatesSection from "./components/UpdatesSection";
import Footer from "./components/Footer";
import Curtain from "./components/Curtain";

function App() {
  return (
    <div>
      <Curtain />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
      <UpdatesSection />
      <Footer />
    </div>
  );
}

export default App;
