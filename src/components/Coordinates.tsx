import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export function Coordinates() {
  return (
    <div className="coordinates-container">
      <div className="title-container">
      <h3><span className="title-blanco">STORM </span>PROTECTION</h3>
<p>Notre mission, votre protection.
  <br/> 
  <br/>
  Services de sécurité professionnels pour tous vos événements.</p></div>
<div className="separator-vertical"></div>
      <address className="coordinates-address">
        <p className="ubication">
          <FaMapMarkerAlt className="coordinates-icon ubi-icon" />
          <span>
          
            61 RUE DU ROUET
            13008 MARSEILLE
          </span>
        </p>

        <p>
          <FaPhoneAlt className="coordinates-icon mobile-icon" />
          <a href="tel:+33780770419" className="coordinates-link">
            07 80 77 04 19
          </a>
          <br />
          <a href="tel:+33614808876" className="coordinates-link">
            06 14 80 88 76
          </a>
        </p>

        <p>
          <FaEnvelope className="coordinates-icon email-icon " />
          <a href="mailto:contact@stormprotecion.fr" className="coordinates-link">
            contact@stormprotection.fr
          </a>
        </p>

        <p>
          <FaClock className="coordinates-icon time-icon" />
          Horaires : Lun - Ven, 9h00 - 18h00
        </p>
      </address>
    </div>
  );
}
