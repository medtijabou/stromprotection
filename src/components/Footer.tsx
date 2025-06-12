import React from "react";


export default function Footer() {
  return (
    <footer className="footer-container">
      <nav className="footer-nav">
        <a href="/guide-local">Guide local</a>
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/politique-confidentialite">Politique de confidentialité</a>
        <a href="/flux-rss">Flux RSS</a>
        <a href="/gestion-cookies">Gestion des cookies</a>
      </nav>

      <div className="footer-copy">&copy; {new Date().getFullYear()} Storm Protection SASU</div>
    </footer>
  );
}
