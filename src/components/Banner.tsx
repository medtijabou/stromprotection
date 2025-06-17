import React, { useState, useEffect } from "react";


const slides = [
  {
    image: "/assets/image/slide/agentprivée.webp",
    title: "Agent de sécurité privée",
    description: "Surveillance des biens et des personnes en toute discrétion."
  },
  {
    image: "/assets/image/slide/agentfiltrage.webp",
    title: "Agent de filtrage",
    description: "Contrôle d’accès et vérification des identités aux entrées."
  },
  {
    image: "/assets/image/slide/agent-cynophile.webp",
    title: "Agent cynophile",
    description: "Sécurité renforcée avec l’aide d’un chien dressé."
  },
  {
    image: "/assets/image/slide/agentincendie.webp",
    title: "Agent de sécurité incendie",
    description: "Prévention et intervention rapide en cas d'incendie."
  }
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div id="accueil" className="banner">
      {slides.map((slide, idx) => (
        <img
          key={idx}
          src={slide.image}
          alt={slide.title}
          className={idx === currentIndex ? "active" : ""}
        />
      ))}
      <div className="banner-content">
        
        <div className="slide-center">
          <h1>STORM PROTECTION</h1>
          <p>NOTRE MISSION  • VOTRE PROTECTION </p>
        </div>
        <div className="slide-left">
          <h3>{currentSlide.title}</h3>
          <p>{currentSlide.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
