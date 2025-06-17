import React from "react";

const presentation = {
  title: "QUI SOMME-NOUS ",
  content: `STORM PROTECTION est une société de sécurité privée créée par Monsieur AYNAOU AZIZ, diplômé du Centre de Formation MASTER INSTITUE (DIRIGEANT D’ENTREPRISE DE SÉCURITÉ PRIVÉE).
Après de nombreuses années d’expérience dans la sécurité privée, cette société assure la protection des biens et des personnes dans tous types de missions.`,
  image: "/public/assets/image/logo/logo-web.jpg",
};

export default function PresentationEntreprise() {
  return (
    <section id="qui-sommes-nous" style={{ maxWidth: 800, margin: "auto", padding: "2rem", color: "#222" ,}}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>{presentation.title}</h2>
      <p style={{ whiteSpace: "pre-line", lineHeight: 1.6 }}>{presentation.content}</p>
      {presentation.image && (
        <img
          src={presentation.image}
          alt={presentation.title}
          style={{ width: "15%", objectFit: "cover", borderRadius: 25, marginTop: 20 }}
        />
      )}
    </section>
  );
}
