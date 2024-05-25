import React from "react";
import TopHeader from "./components/topHeader/TopHeader";
import Navbar from "./components/navbar/Navbar";
import Pages from "./pages/Pages";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/heroSection/HeroSection";

function App() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <HeroSection />
      <Pages />
      <Footer />
    </>
  );
}

export default App;
