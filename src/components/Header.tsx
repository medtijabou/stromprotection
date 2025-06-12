import React, { useState } from "react";
import "../style/index.scss";

const items = ["Accueil", "Notre mission", "Qui sommes-nous",  "Contactez-nous"];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("Accueil");
  const [isOpen, setIsOpen] = useState(false);

  // Fermer le menu au clic sur un item
  const handleItemClick = (item: string) => {
    setActive(item);
    setIsOpen(false);
  };

  // Fermer le menu au clic sur overlay ou bouton fermer
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <img
          src="./src/assets/image/logo/logo-strom.webp"
          alt="Logo Strom Protection"
          className="navbar-logo"
        />

        {/* Nav desktop */}
        <ul className="navbar-list desktop">
          {items.map((item) => (
            <li
              key={item}
              className={`navbar-item ${active === item ? "active" : ""}`}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Hamburger mobile */}
        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") setIsOpen(!isOpen);
          }}
        >
          &#9776;
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Modal menu */}
      <div className={`modal-menu ${isOpen ? "slide-in" : ""}`}>
        <div
          className="close-btn"
          onClick={closeMenu}
          role="button"
          tabIndex={0}
          aria-label="Fermer le menu"
          onKeyDown={(e) => {
            if (e.key === "Enter") closeMenu();
          }}
        >
          &times;
        </div>
        <ul className="navbar-list mobile">
          {items.map((item) => (
            <li
              key={item}
              className={`navbar-item ${active === item ? "active" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
