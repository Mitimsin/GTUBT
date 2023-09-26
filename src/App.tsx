import React from "react";
import "./App.css";
import ParticleStar from "./components/Base/ParticleStar";
import Home from "./components/Home/Home";
import ParticleShootingStar from "./components/Base/ParticleShootingStar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="bg">
        <ParticleStar />
        <ParticleShootingStar />
      </div>
      <Navbar />
      <Home />
      <Home />
    </>
  );
}

export default App;
