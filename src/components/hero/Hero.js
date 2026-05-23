import "./Hero.css";

import heroImage from "./hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img
          src={heroImage}
          alt="Tree worker cutting tree with chainsaw"
        />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">
          Professional Tree Service
        </p>

        <h1 className="hero-title">
          Expert Tree Care & <br />
          Removal in South Carolina
        </h1>

        <p className="hero-text">
          Quality tree services you can trust —
          keeping your property safe, clean,
          and beautiful.
        </p>

        <div className="hero-actions">
          <a href="#estimate" className="hero-cta">
            Schedule a Free Estimate
          </a>

          <a href="tel:8034023736" className="hero-phone">
            Call (803) 402-3736
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;