import React, { useState } from "react";

const presentation = {
  title: "NOTR HISTOIR",
  content: `STORM PROTECTION est une société de sécurité privée créée par Monsieur AYNAOU AZIZ, diplômé du Centre de Formation MASTER INSTITUE (DIRIGEANT D’ENTREPRISE DE SÉCURITÉ PRIVÉE).
Après de nombreuses années d’expérience dans la sécurité privée, cette société assure la protection des biens et des personnes dans tous types de missions.`,
  image: "/public/assets/image/logo/logo-web.jpg",
};

export default function PresentationEntreprise() {
  const [showMore, setShowMore] = useState(false);

  const titleMiddle = Math.floor(presentation.title.length / 3);
  const titlePart1 = presentation.title.slice(0, titleMiddle);
  const titlePart2 = presentation.title.slice(titleMiddle);

  return (
    <section id="qui-sommes-nous" className="presentation-section">
      {presentation.image && (
        <img
          src={presentation.image}
          alt={presentation.title}
          className="presentation-image animated-logo"
        />
      )}
      <div className="presentation-text">
        <h2 className="presentation-title animated-title">
          <span className="title-red">{titlePart1}</span>
          <span className="title-white">{titlePart2}</span>
        </h2>
        <p className="presentation-content animated-content">{presentation.content}</p>

        {!showMore && (
          <button
            className="en-savoir-plus-button"
            onClick={() => setShowMore(true)}
          >
            En savoir +
          </button>
        )}

        {showMore && (
          <>
            <p className="motive">
              Notre mission est d'assurer la sécurité des personnes et des biens lors d'événements de toute envergure, des petites réunions privées aux grands festivals et manifestations sportives.{" "}
              <br />
              Nous nous distinguons par notre <span className="text-rouge">professionnalisme</span>, notre <span className="text-rouge">réactivité</span> et notre capacité à nous adapter aux besoins spécifiques de chaque client.
              Notre équipe est composée d'agents qualifiés et régulièrement formés aux dernières techniques de sécurité.
              <br />
              STORM PROTECTION est agréée par le <span className="text-rouge">CNAPS</span> (Conseil National des Activités Privées de Sécurité) et respecte scrupuleusement la réglementation en vigueur dans le secteur de la sécurité privée.
            </p>
            <a
              href="https://annuaire-entreprises.data.gouv.fr/entreprise/storm-protection-919201608"
              target="_blank"
              rel="noopener noreferrer"
              className="presentation-button"
            >
              Découvrir nos certifications
            </a>
          </>
        )}
      </div>
    </section>
  );
}
