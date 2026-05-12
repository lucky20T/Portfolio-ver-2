import React, { useEffect, useState } from 'react';

const StarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random falling stars on mount
    const newStars = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 150}%`, // 150% so they can start off-screen right
      top: `${Math.random() * -50}%`, // Start above the screen
      animationDuration: `${Math.random() * 4 + 3}s`, // Between 3 and 7 seconds
      animationDelay: `${Math.random() * 10}s`, // Staggered start times
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="falling-stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="falling-star"
          style={{
            left: star.left,
            top: star.top,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarsBackground;
