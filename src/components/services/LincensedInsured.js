// src/components/ServicesSection/LicensedInsured.js

import "./css/LincensedInsured.css";

const LicensedInsured = () => {
  return (
    <div className="licensed-banner">
      <div className="licensed-left">
        <div className="licensed-icon">✓</div>
        <div>
          <h3 className="licensed-title">Licensed &amp; Insured</h3>
          <p className="licensed-text">Trusted by homeowners across South Carolina</p>
        </div>
      </div>

      <div className="licensed-right">
        <div className="licensed-rating">
          ★★★★★ <span>5.0</span>
        </div>
        <p className="licensed-text">Based on 100+ reviews</p>
      </div>
    </div>
  );
};

export default LicensedInsured;