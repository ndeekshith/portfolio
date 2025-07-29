import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
// --- THIS IS THE KEY CHANGE ---
// We now import loadSlim from the slim bundle
import { loadSlim } from "tsparticles-slim"; 

const AnimatedBackground = () => {
  // This function now loads the slim engine
  const particlesInit = useCallback(async (engine) => {
    // This loads the slim bundle, which is smaller and perfect for our needs
    await loadSlim(engine);
  }, []);

  const particleOptions = {
    background: {
      color: {
        value: '#010409', // A very dark, deep blue-black
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab', 
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 1,
            color: '#007bff'
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'out',
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
    />
  );
};

export default AnimatedBackground;