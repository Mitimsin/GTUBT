import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticleShootingStar = () => {
  const shootingStarparticleInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="shootingStarParticles"
      init={shootingStarparticleInit}
      options={{
        particles: {
          number: {
            value: 2,
          },
          size: {
            value: 1,
          },
          move: {
            enable: true,
            speed: 31,
            direction: "bottom-right",
            random: false,
            straight: true,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          modes: {
            bubble: {
              distance: 83.91608391608392,
              size: 1,
              duration: 3,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 20,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticleShootingStar;
