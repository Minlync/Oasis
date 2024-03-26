import React, { useEffect, useState } from 'react';
import './styles.css'; // Adjust the path as necessary

const GradientBackground = () => {
  // State to track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect for mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient-bg">
      <div className="text-container">Your Text Here</div>
      {/* More elements like .g1, .g2, etc., go here */}
      <div
        className="interactive"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default GradientBackground;
