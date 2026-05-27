// src/components/Firewood/Firewood.js

import "./Firewood.css";
import { Truck, MapPin } from "lucide-react";

import firewoodImage from "./firewood.png";

const Firewood = () => {
  return (
    <section className="firewood-section">
      <div className="firewood-inner">
        <div className="firewood-content">
          <p className="firewood-eyebrow">Available Now</p>

          <h2 className="firewood-title">
            Seasoned Firewood!
          </h2>

          <p className="firewood-text">
            High quality, seasoned firewood, perfect for your fireplace, fire pit,
            or wood stove.
          </p>

          <div className="firewood-features">
            <div className="firewood-feature">
              <Truck size={18} />
              <span>Local Delivery Available</span>
            </div>

            <div className="firewood-feature">
              <MapPin size={18} />
              <span>Pickup Available</span>
            </div>
          </div>

          <div className="firewood-actions">
            <a href="tel:8034023736" className="firewood-button">
              Call To Order
            </a>

            <span className="firewood-phone">(803) 402-3736</span>
          </div>
        </div>

        <div className="firewood-image">
          <img
            src={firewoodImage}
            alt="Seasoned firewood stacked neatly"
          />
        </div>
      </div>
    </section>
  );
};

export default Firewood;
