import { useState, useRef, useEffect } from "react";
import "./css/Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    document.addEventListener(
      "touchstart",
      handleClickOutside
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

      document.removeEventListener(
        "touchstart",
        handleClickOutside
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <div className="nav-wrapper" ref={navRef}>
      {/* Mobile Toggle */}

      <button
        className={`menu-toggle ${
          menuOpen ? "open" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      ></button>

      <nav
        className={`main-nav ${
          menuOpen ? "open" : ""
        }`}
      >
        <a
          href="#about"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#services"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </a>

        <a
          href="#estimate"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get a Free Estimate
        </a>
      </nav>
    </div>
  );
};

export default Nav;