import React, { useState, useEffect } from "react";
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

  // Effet pour bloquer le scroll de la page quand modal ouverte
  useEffect(() => {
    if (modalData) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Nettoyage à la désactivation du composant
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalData]);

  const sizes = ["small", "medium", "large"];

  return (
    <section id="mission" className="plaquette">
      <h1 className="plaquette-title">
        <span className="white-text">Nos</span> <span className="red-text">Services</span>
      </h1>

      <p className="plaquette-text">Une expertise complète au service de votre sécurité</p>
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
            <h2 className="modal-title">{modalData.title}</h2>
            <p>{modalData.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Plaquette;
