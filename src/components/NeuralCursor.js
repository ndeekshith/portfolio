import React, { useState, useEffect } from 'react';
import './NeuralCursor.css';

const NeuronSVG = ({ isHovered, isClicked }) => ( // NEW: Added isClicked prop
  // NEW: Added is-clicked class dynamically
  <svg
    className={`neuron-svg-cursor ${isHovered ? 'hovered' : ''} ${isClicked ? 'is-clicked' : ''}`}
    viewBox="0 0 60 60"
    width="30"
    height="30"
  >
    {/* Define a gradient for the cell body to give it depth */}
    <defs>
      <radialGradient id="neuronGradient">
        <stop offset="0%" stopColor="rgba(0, 123, 255, 0.5)" />
        <stop offset="100%" stopColor="rgba(0, 123, 255, 0.8)" />
      </radialGradient>
    </defs>

    {/* NEW: Added a circle for the click shockwave effect */}
    <circle className="neuron-click-shockwave" cx="30" cy="30" r="10" />

    {/* The outer ring that reacts on hover */}
    <circle className="neuron-outline" cx="30" cy="30" r="25" />

    {/* Group for the dendrites so we can animate them together */}
    <g className="dendrites-group">
      <path className="dendrite" d="M30,5 Q25,0 20,5" />
      <path className="dendrite" d="M55,30 Q60,25 55,20" />
      <path className="dendrite" d="M10,50 Q0,45 5,40" />
      <path className="dendrite" d="M50,55 Q55,60 45,55" />
      <path className="dendrite" d="M8,15 Q0,20 10,25" />
    </g>

    {/* The main cell body (Soma) */}
    <circle
      className="neuron-soma"
      cx="30"
      cy="30"
      r="12"
      fill="url(#neuronGradient)"
    />

    {/* The nucleus of the neuron */}
    <circle className="neuron-nucleus" cx="30" cy="30" r="4" />
  </svg>
);

const NeuralCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);
  const [lines, setLines] = useState([]);
  const [isClicked, setIsClicked] = useState(false); // NEW: State for click effect

  const isHovering = !!hoveredElement;

  useEffect(() => {
    // Mouse Move Listener
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target.closest(
        'a, button, input, textarea, [role="button"], .clickable'
      );
      setHoveredElement(target);
    };

    // NEW: Mouse Click Listeners
    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown); // NEW
    window.addEventListener('mouseup', handleMouseUp);     // NEW

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown); // NEW
      window.removeEventListener('mouseup', handleMouseUp);     // NEW
    };
  }, []);

  useEffect(() => {
    if (hoveredElement) {
      const rect = hoveredElement.getBoundingClientRect();
      const connectionPoints = [
        { x: rect.left, y: rect.top },
        { x: rect.right, y: rect.top },
        { x: rect.right, y: rect.bottom },
        { x: rect.left, y: rect.bottom },
      ];
      const newLines = connectionPoints.map(point => {
        const dx = point.x - position.x;
        const dy = point.y - position.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        return {
          x1: position.x,
          y1: position.y,
          x2: point.x,
          y2: point.y,
          length: length,
        };
      });
      setLines(newLines);
    } else {
      setLines([]);
    }
  }, [hoveredElement, position]);

  return (
    <>
      {/* SVG for drawing the synaptic lines */}
      <svg className={`neural-lines-svg ${isHovering ? 'active' : ''}`}>
        {lines.map((line, index) => (
          <line
            key={index}
            className="synapse-line"
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            style={{
              strokeDasharray: line.length,
              strokeDashoffset: line.length,
            }}
          />
        ))}
      </svg>

      {/* The new SVG-based neuron cursor */}
      <div
        className="neuron-cursor-container"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {/* NEW: Pass isClicked prop down */}
        <NeuronSVG isHovered={isHovering} isClicked={isClicked} />
      </div>
    </>
  );
};

export default NeuralCursor;