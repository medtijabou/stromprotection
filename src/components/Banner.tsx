import React, { useState, useEffect } from "react";


const images = [
  
  "/assets/image/slide/agentprivée.webp",
  "/assets/image/slide/agentfiltrage.webp",
  "/assets/image/slide/agent-cynophile.webp",
  "/assets/image/slide/agentincendie.webp"
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
    <div id="accueil" className="banner">
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
        <p>GARDIENNAGE,SECURITE à Marseille et sur toute la région PACA. </p>
       
      </div>
    </div>
  );
};

export default Banner;
