import React from "react";
import "./App.css";
import ParticleStar from "./components/Base/ParticleStar";
import Home from "./components/Home/Home";
import ParticleShootingStar from "./components/Base/ParticleShootingStar";

function App() {
  return (
    <>
      <div className="bg">
        <ParticleStar />
        <ParticleShootingStar />
      </div>
      <Home />
      <Home />
    </>
  );
}

export default App;
