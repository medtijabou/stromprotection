// components/Plaquette.tsx

import React from "react";
import PlaquetteSection from "./PlaquetteSection";
import { sections } from "./data";

const Plaquette: React.FC = () => {
  return (
    <section className="plaquette-container">
      <h1 className="plaquette-header">Présentation de Storm Protection</h1>
      {sections.map((section, index) => (
        <PlaquetteSection key={index} title={section.title} content={section.content} />
      ))}
    </section>
  );
};

export default Plaquette;
