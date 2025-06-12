import React, { useState } from "react";
import { sections } from "./data";

const Plaquette: React.FC = () => {
  const [modalData, setModalData] = useState<{ title: string; content: string } | null>(null);

  // Ouvre modale avec contenu
  const openModal = (title: string, content: string) => {
    setModalData({ title, content });
  };

  // Ferme modale
  const closeModal = () => {
    setModalData(null);
  };

  const sizes = ["small", "medium", "large"];

  return (
    <section className="plaquette">
      <h1 className="plaquette-title">Présentation de Storm Protection</h1>
      <div className="plaquette-grid">
    {sections.map((section, index) => {
  const sizeClass = sizes[index % sizes.length];
  const translateClass = index % 2 === 0 ? "translate-right" : "translate-left";
  const isLast = index === sections.length - 1;

  return (
    <div
      className={`plaquette-item ${sizeClass} ${translateClass} ${isLast ? "last" : ""}`}
      key={index}
    >
      <img src={section.image} alt={section.title} />
      <div
        className="plaquette-title-overlay"
        onClick={() => openModal(section.title, section.content)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && openModal(section.title, section.content)}
      >
        {section.title}
      </div>
    </div>
  );
})}

      </div>

      {/* Modal */}
      {modalData && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Empêche fermeture au clic dans la modale
          >
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <h2>{modalData.title}</h2>
            <p>{modalData.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Plaquette;
