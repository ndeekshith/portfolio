import React, { useEffect, useState } from "react";
import "./NeuralCursor.css";

const NeuronCursorSVG = ({ hovered, clicked }) => {
  return (
    <svg
      className={`neuron-svg ${hovered ? "hovered" : ""} ${clicked ? "clicked" : ""
        }`}
      viewBox="0 0 40 40"
    >
      {/* Soma */}
      <circle cx="20" cy="20" r="4" className="soma" />

      {/* Dendrites */}
      <line x1="20" y1="2" x2="20" y2="12" className="dendrite" />
      <line x1="20" y1="28" x2="20" y2="38" className="dendrite" />
      <line x1="2" y1="20" x2="12" y2="20" className="dendrite" />
      <line x1="28" y1="20" x2="38" y2="20" className="dendrite" />

      {/* Click pulse */}
      <circle cx="20" cy="20" r="6" className="pulse" />
    </svg>
  );
};

const NeuralCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target.closest(
        "a, button, input, textarea, [role='button'], .clickable"
      );
      setHovered(!!target);
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <div
      className="neuron-cursor"
      style={{
        left: pos.x,
        top: pos.y,
      }}
    >
      <NeuronCursorSVG hovered={hovered} clicked={clicked} />
    </div>
  );
};

export default NeuralCursor;
