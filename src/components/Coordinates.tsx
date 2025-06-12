import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";


export function Coordinates() {
  return (
    <div className="coordinates-container">
      <h3>Nos coordonnées</h3>
      <address className="coordinates-address">
        <p>
          <FaMapMarkerAlt className="coordinates-icon" />
          <span>
            <strong>SASU AU CAPITAL DE 3000 EUROS</strong><br />
            61 RUE DU ROUET<br />
            13008 MARSEILLE
          </span>
        </p>

        <p>
          <FaPhoneAlt className="coordinates-icon" />
          <a href="tel:+33614663128" className="coordinates-link">
            06 14 66 31 28
          </a>
          <br />

          <a href="tel:+33614808876" className="coordinates-link">
           06 14 80 88 76
          </a>
        </p>
        <p>
          <FaClock className="coordinates-icon" />
          Horaires : Lun - Ven, 9h00 - 18h00
        </p>
      </address>
    </div>
  );
}
