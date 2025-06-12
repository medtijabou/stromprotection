import React, { useState, useEffect } from "react";

const items = [
  { label: "Accueil", anchor: "accueil" },
  { label: "Nos Services", anchor: "mission" },
  { label: "Qui sommes-nous", anchor: "qui-sommes-nous" },
  { label: "Contactez-nous", anchor: "contact" },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("Accueil");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleItemClick = (label: string) => {
    setActive(label);
    setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  // ✅ Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <img
          src="/assets/image/logo/logo-strom.webp"
          alt="Logo Strom Protection"
          className="navbar-logo"
        />

        {/* Nav desktop */}
        <ul className="navbar-list desktop">
          {items.map((item) => (
            <li
              key={item.anchor}
              className={`navbar-item ${active === item.label ? "active" : ""}`}
              onClick={() => setActive(item.label)}
            >
              <a href={`#${item.anchor}`}>{item.label}</a>
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
      <div className={`overlay ${isOpen ? "open" : ""}`} onClick={closeMenu} />

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
              key={item.anchor}
              className={`navbar-item ${active === item.label ? "active" : ""}`}
              onClick={() => handleItemClick(item.label)}
            >
              <a href={`#${item.anchor}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
