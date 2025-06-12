import React, { useState, useEffect } from "react";


const images = [

  "/public/assets/image/slide/agentprivée.webp",
  "/public/assets/image/slide/agentfiltrage.webp",
  "/public/assets/image/slide/agent-cynophile.webp",
  "/public/assets/image/slide/agentincendie.webp"
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={idx === currentIndex ? "active" : ""}
        />
      ))}
      <div className="banner-content">
        <h1>STORM PROTECTION</h1>
       
      </div>
    </div>
  );
};

export default Banner;
