import React, { useState, useEffect, useRef } from "react";

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
  const [hidden, setHidden] = useState(false);

  const hideTimeoutRef = useRef<number | null>(null);

  const resetHideTimeout = () => {
    setHidden(false);
    if (hideTimeoutRef.current) {
      window.clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = window.setTimeout(() => {
      setHidden(true);
    }, 1000);
  };

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);

    // Ne cache la navbar que si on a scrollé
    if (isScrolled) {
      resetHideTimeout();
    } else {
      // En haut de page, la navbar reste visible
      setHidden(false);
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }
    }
  };

  const handleMouseMove = () => {
    if (scrolled) {
      resetHideTimeout();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [scrolled]);

  const handleItemClick = (label: string) => {
    setActive(label);
    setIsOpen(false);
    setHidden(false); // remet visible après clic
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
        <img
          src="/assets/image/logo/logo-web.jpg"
          alt="Logo Strom Protection"
          className="navbar-logo"
        />

        <ul className="navbar-list desktop">
          {items.map((item) => (
            <li
              key={item.anchor}
              className={`navbar-item ${active === item.label ? "active" : ""}`}
            >
              <a href={`#${item.anchor}`} onClick={() => handleItemClick(item.label)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

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

      <div className={`overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)} />

      <div className={`modal-menu ${isOpen ? "slide-in" : ""}`}>
        <div
          className="close-btn"
          onClick={() => setIsOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Fermer le menu"
          onKeyDown={(e) => {
            if (e.key === "Enter") setIsOpen(false);
          }}
        >
          &times;
        </div>
        <ul className="navbar-list mobile">
          {items.map((item) => (
            <li
              key={item.anchor}
              className={`navbar-item ${active === item.label ? "active" : ""}`}
            >
              <a href={`#${item.anchor}`} onClick={() => handleItemClick(item.label)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
