// Stars.js

import React, { useEffect, useState } from 'react';
import './Star.css';

const Stars = ({ numberOfStars }) => {
  const [starElements, setStarElements] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStarElements((prevStars) => [
        ...prevStars,
        <div key={prevStars.length} className="star" style={getRandomPosition()}></div>,
      ]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const getRandomPosition = () => {
    const left = `${Math.random() * 100}vw`;
    const top = `${Math.random() * 100}vh`;

    return { left, top };
  };

  return <div className="star-container">{starElements}</div>;
};

export default Stars;
