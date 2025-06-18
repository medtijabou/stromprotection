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
        "template_b954o8r",        // ✅ Ton ID de template
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "B5y_VQkmGf4mqMMU7"        // ✅ Ta clé publique
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
    <section id="contact" className="contact-section">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <button type="submit">Envoyer</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </section>
  );
}
