import React from "react";
import "./App.css";
import ParticleStar from "./components/Base/ParticleStar";
import Home from "./components/Home/Home";
import ParticleShootingStar from "./components/Base/ParticleShootingStar";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./components/Aboutus/Aboutus";

function App() {
  return (
    <>
      <div className="bg">
        <ParticleStar />
        <ParticleShootingStar />
      </div>
      <Navbar />
      <Home />
      <Aboutus />
    </>
  );
}

export default App;
