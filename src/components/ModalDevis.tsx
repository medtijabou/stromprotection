import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ModalDevisProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalDevis: React.FC<ModalDevisProps> = ({ isOpen, onClose }) => {
  const form = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_dkgd775",
        "template_b954o8r",
        form.current,
        "B5y_VQkmGf4mqMMU7"
      )
      .then(() => {
        setStatusMessage("✅ Demande envoyée avec succès !");
        setIsError(false);
        form.current?.reset();
        setTimeout(() => {
          setStatusMessage(null);
          onClose();
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        setStatusMessage("❌ Erreur lors de l'envoi. Veuillez réessayer.");
        setIsError(true);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>Demander un devis</h2>
        <form ref={form} onSubmit={handleSubmit} className="form-devis">
          <input type="text" name="from_name" placeholder="Votre nom" required />
          <input type="email" name="from_email" placeholder="Votre email" required />
          <input type="tel" name="tel" placeholder="Téléphone" />
          <textarea name="message" placeholder="Décrivez votre besoin..." required />
          <button type="submit">Envoyer</button>
        </form>

        {statusMessage && (
          <p
            style={{
              color: isError ? "#ff4d4f" : "#28a745", // rouge si erreur, vert si succès
              backgroundColor: isError ? "#ffe6e6" : "#d4edda", // fond léger
              padding: "10px",
              borderRadius: "4px",
              marginTop: "15px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ModalDevis;
