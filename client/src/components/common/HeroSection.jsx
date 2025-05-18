import React from "react";
import HeroImage from "./../../assets/images/hero-bg.webp"; 

const HeroSection = () => {
  return (
    <section
      className="text-center py-5 text-white"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "2rem", borderRadius: "10px" }}>
        <h1 className="fw-bold">Soluciones de Software para tu Empresa</h1>
        <p className="lead">Innovación y tecnología a tu alcance</p>
        <a href="/contact" className="btn btn-light mt-3">Contáctanos</a>
      </div>
    </section>
  );
};

export default HeroSection;
