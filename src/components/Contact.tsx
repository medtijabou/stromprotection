import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const result = await emailjs.send(
        "service_dkgd775",         // ✅ Ton ID de service
        "template_b954o8r",         // ⛔️ Remplace par TON ID DE TEMPLAT
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "B5y_VQkmGf4mqMMU7"          // ⛔️ Remplace par TA CLÉ PUBLIQUE
      );

      console.log(result.text);
      setStatus("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <section id="contact" style={{ maxWidth: 600, margin: "auto", padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Contactez-nous</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          style={{ padding: "0.5rem", fontSize: "1rem", resize: "vertical" }}
        />
        <button
          type="submit"
          style={{
            padding: "0.7rem",
            fontSize: "1.1rem",
            backgroundColor: "#e63946",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Envoyer
        </button>
      </form>
      {status && <p style={{ marginTop: "1rem", textAlign: "center" }}>{status}</p>}
    </section>
  );
}
