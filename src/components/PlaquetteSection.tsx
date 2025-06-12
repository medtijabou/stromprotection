// components/PlaquetteSection.tsx

import React from "react";

interface Props {
  title: string;
  content: string;
}

const PlaquetteSection: React.FC<Props> = ({ title, content }) => {
  return (
    <section className="plaquette-section">
      <h2 className="plaquette-title">{title}</h2>
      <p className="plaquette-content">{content}</p>
    </section>
  );
};

export default PlaquetteSection;
