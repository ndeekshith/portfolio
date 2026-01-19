import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const AnimatedBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },

    background: {
      color: "#050814",
      image:
        "radial-gradient(circle at 20% 30%, rgba(120,119,198,0.15), transparent 45%)," +
        "radial-gradient(circle at 80% 70%, rgba(102,252,241,0.12), transparent 50%)",
    },

    fpsLimit: 60,

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "bubble"],
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 0.35,
            color: "#66fcf1",
          },
        },
        bubble: {
          distance: 220,
          size: 7,
          duration: 2,
          opacity: 0.9,
        },
        push: {
          quantity: 3,
        },
      },
    },

    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          area: 900,
        },
      },

      color: {
        value: ["#66fcf1", "#7877c6", "#45a29e", "#f0a5d2"],
      },

      shape: {
        type: "circle",
      },

      opacity: {
        value: { min: 0.15, max: 0.6 },
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.1,
          sync: false,
        },
      },

      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 1.5,
          minimumValue: 0.6,
          sync: false,
        },
      },

      links: {
        enable: true,
        distance: 160,
        color: "#ffffff",
        opacity: 0.05,
        width: 1,
      },

      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce",
        },
        attract: {
          enable: true,
          rotateX: 800,
          rotateY: 1400,
        },
      },

      collisions: {
        enable: false,
      },

      twinkle: {
        particles: {
          enable: true,
          frequency: 0.03,
          opacity: 1,
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
