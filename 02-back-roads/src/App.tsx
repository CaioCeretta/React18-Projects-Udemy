import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import NavbarAlternative from "./components/NavbarAlternative";
import FooterAlternative from "./components/FooterAlternative";

function App() {
  return (
    <div>
      <NavbarAlternative />

      <Hero />

      <About />

      <Services />

      <Tours />

      <FooterAlternative />
    </div>
  );
}

export default App;
