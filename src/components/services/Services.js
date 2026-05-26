import "./css/Services.css";

import Tree from "./images/tree.png";
import Chainsaw from "./images/chainsaw.png";
import Stump from "./images/stump.png";
import Lightening from "./images/lightening.png";

/* NEW ICONS */
import Mulching from "./images/mulch.png";
import Health from "./images/health.png";

import ServiceCard from "./ServiceCard";
import LicensedInsured from "./LincensedInsured";

const services = [
  {
    Icon: Chainsaw,
    title: "Tree Trimming",
    description:
      "Professional pruning to improve health, safety, and appearance.",
  },
  
  {
    Icon: Tree,
    title: "Tree Removal",
    description:
      "Safe, efficient removal of hazardous or unwanted trees.",
  },

  {
    Icon: Stump,
    title: "Stump Grinding",
    description:
      "Complete stump removal for a clean, level yard.",
  },

  {
    Icon: Lightening,
    title: "Emergency Service",
    description:
      "24/7 storm damage response and hazardous tree removal.",
  },

  /* NEW */

  {
    Icon: Mulching,
    title: "Forestry Mulching & Land Clearing",
    description:
      "Efficient clearing of brush, overgrowth, and unwanted vegetation.",
  },

  {
    Icon: Health,
    title: "Plant Health Care",
    description:
      "Protect and strengthen your trees and landscape with proactive care.",
  },
];

const Services = () => {
  return (
    <section
      className="services-section"
      id="services"
    >
      <div className="services-inner">

        <div className="services-header">

          <p className="services-eyebrow">
            Our Services
          </p>

          <h2 className="services-title">
            Complete Tree Care Solutions
          </h2>

          <p className="services-text">
            From removal to maintenance,
            we handle it all with precision
            and care.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

        <LicensedInsured />

      </div>
    </section>
  );
};

export default Services;
