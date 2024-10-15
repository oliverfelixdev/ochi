// App.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const EyesFollowCursor = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const leftEyeAngle = calculateAngle(leftEyeRef, clientX, clientY);
      const rightEyeAngle = calculateAngle(rightEyeRef, clientX, clientY);

      // Apply GSAP animation to make the movement smooth
      gsap.to(leftEyeRef.current, {
        duration: 0.5,
        ease: "power2.out",
        rotate: leftEyeAngle,
      });

      gsap.to(rightEyeRef.current, {
        duration: 0.5,
        ease: "power2.out",
        rotate: rightEyeAngle,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateAngle = (eyeRef, x, y) => {
    if (!eyeRef.current) return 0;
    const eyeRect = eyeRef.current.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    const dx = (x - eyeCenterX) * 1.5; // Amplify movement for a more dramatic effect
    const dy = (y - eyeCenterY) * 1.5;
    return Math.atan2(dy, dx) * (180 / Math.PI); // Convert radians to degrees
  };

  return (
    <div className="eyes-container">
      <div className="eye" ref={leftEyeRef}></div>
      <div className="eye" ref={rightEyeRef}></div>
    </div>
  );
};

export default EyesFollowCursor;
