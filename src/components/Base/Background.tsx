import React from "react";
import "../../styles/base-styles/background.css";

import ParticleShootingStar from "./ParticleShootingStar";
import ParticleStar from "./ParticleStar";

const Background = () => {
  return (
    <div className="bg">
      <ParticleStar />
      <ParticleShootingStar />
    </div>
  );
};

export default Background;
