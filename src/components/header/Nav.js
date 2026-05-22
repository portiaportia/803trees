import { useState } from "react";
import "./css/Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      {/* Mobile Toggle */}
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"></button>

      <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
        <a href="/" className="nav-link active">Home</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#about" className="nav-link">About</a>
        <a href="/gallery" className="nav-link">Gallery</a>
        <a href="#estimate" className="nav-cta">
          Get a Free Estimate
        </a>
      </nav>
    </div>
  );
}

export default Nav;