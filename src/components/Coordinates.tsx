import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import ModalDevis from "./ModalDevis";


export const Coordinates: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="coordinates-container">
      <div className="title-container">
        <h3>
          <span className="title-blanco">STORM </span>PROTECTION
        </h3>
        <p>
          Notre mission, votre protection.
          <br />
          <br />
          Services de sécurité professionnels pour tous vos événements.
        </p>
        <button className="btn-devis" onClick={() => setModalOpen(true)}>
          Demander un devis
        </button>
      </div>

      <div className="separator-vertical"></div>

      <address className="coordinates-address">
        <p className="ubication">
          <FaMapMarkerAlt className="coordinates-icon ubi-icon" />
          <span>61 RUE DU ROUET<br />13008 MARSEILLE</span>
        </p>

        <p>
          <FaPhoneAlt className="coordinates-icon mobile-icon" />
          <a href="tel:+33780770419" className="coordinates-link">07 80 77 04 19</a><br />
          <a href="tel:+33614808876" className="coordinates-link">06 14 80 88 76</a>
        </p>

        <p>
          <FaEnvelope className="coordinates-icon email-icon" />
          <a href="mailto:contact@stormprotection.fr" className="coordinates-link">
            contact@stormprotection.fr
          </a>
        </p>

        <p>
          <FaClock className="coordinates-icon time-icon" />
          Horaires : Lun - Ven, 9h00 - 18h00
        </p>
      </address>

      <ModalDevis isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
