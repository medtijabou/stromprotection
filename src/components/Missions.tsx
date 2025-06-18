import React, { useState } from "react";
import { sections } from "./data";

const Plaquette: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="mission" className="plaquette">
      <h1 className="plaquette-title">
        <span className="red-text">Nos</span> <span className="white-text">Services</span>
      </h1>

      <p className="plaquette-text">Une expertise complète au service de votre sécurité</p>

      <div className="plaquette-grid">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`plaquette-card ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <div className="card-header">{section.title}</div>
                <img src={section.image} alt={section.title} />
             <div className="plus-info">
    <h4>Découvrez notre expertise</h4>
    <p>Cliquez pour plus d'infos</p>
  </div>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plaquette;
