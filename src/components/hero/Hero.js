// src/components/Hero/Hero.js

import "./Hero.css";

import {
  ShieldCheck,
  TreePine,
  Clock3,
} from "lucide-react";

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

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-eyebrow">
          Professional Tree Service
        </p>

        <h1 className="hero-title">
          South Carolina
          <br />
          Tree Care Experts
        </h1>

        <p className="hero-text">
          Quality tree services you can trust —
          keeping your property safe,
          clean, and beautiful.
        </p>

        <div className="hero-actions">

          <a
            href="#estimate"
            className="hero-cta"
          >
            Schedule a Free Estimate
          </a>

          <a
            href="tel:8034023736"
            className="hero-phone"
          >
            Call (803) 402-3736
          </a>

        </div>

        <div className="hero-features">

          <div className="hero-feature">
            <ShieldCheck size={22} />

            <span>
              Licensed
              <br />
              &amp; Insured
            </span>
          </div>

          <div className="hero-feature">
            <TreePine size={22} />

            <span>
              Local &amp;
              <br />
              Reliable
            </span>
          </div>

          <div className="hero-feature">
            <Clock3 size={22} />

            <span>
              24/7
              <br />
              Emergency Service
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;