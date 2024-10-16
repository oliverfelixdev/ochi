import React, { useEffect, useState } from 'react';

function Eyes() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const eyeRadius = 60;
  const smallCircleRadius = 8;
  const eyes = [
    { id: 'left', offsetX: 0 },
    { id: 'right', offsetX: 0 },
  ];

  const calculatePositions = (x, y, offsetX) => {
    const eyeCenter = { x: 100 + offsetX, y: 100 };
    const dx = x - window.innerWidth / 2;
    const dy = y - window.innerHeight / 2;
    const angle = Math.atan2(dy, dx);

    const smallCircleX = eyeCenter.x + (eyeRadius - smallCircleRadius) * Math.cos(angle);
    const smallCircleY = eyeCenter.y + (eyeRadius - smallCircleRadius) * Math.sin(angle);

    return { smallCircleX, smallCircleY };
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.7" className="h-full w-full flex balls-component items-center justify-center gap-10">
        {eyes.map((eye) => {
          const positions = calculatePositions(mousePos.x, mousePos.y, eye.offsetX);
          return (
            <div key={eye.id} className={`svg-${eye.id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-56 w-56"
                data-eye={eye.id}
                width="200"
                height="201"
                viewBox="0 0 200 201"
                fill="none"
              >
                <circle cx="100" cy="100" r="100" fill="#F4F4F4"></circle>
                <g className="eyes-svg__group origin-center" fill="none">
                  <circle cx="100" cy="100" r="60" fill="#212121" className='gg-camo'></circle>
                  <circle
                    cx={positions.smallCircleX}
                    cy={positions.smallCircleY}
                    r={smallCircleRadius}
                    fill="#F4F4F4"
                  ></circle>
                </g>
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Eyes;
