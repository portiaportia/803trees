// src/components/Footer/Footer.js

import "./css/Footer.css";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContactGroup from "./FooterContactGroup";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <FooterBrand />

          <FooterLinks
            title="Services"
            links={[
              { label: "Tree Removal", href: "/" },
              { label: "Tree Trimming", href: "/" },
              { label: "Stump Grinding", href: "/" },
              { label: "Emergency Service", href: "/" },
            ]}
          />

          <FooterContactGroup
            title="Contact"
            items={[
              { icon: "phone", text: "(803) 402-3736", href: "tel:8034023736" },
              { icon: "sms", text: "Text Us", href: "sms:+8034023736" },
              {
                icon: "map",
                text: "Serving Columbia, Lexington, Irmo, and surrounding Midlands SC",
              },
              {
                icon: "mail",
                text: "tyler@803tree.com",
                href: "mailto:tyler@803tree.com",
              }
            ]}
          />

          <FooterContactGroup
            title="Business Hours"
            items={[
              { icon: "clock", text: "Mon - Fri: 7:00 AM - 6:00 PM" },
              { icon: "clock", text: "Sat: 8:00 AM - 2:00 PM" },
              { icon: "clock", text: "Sun: Emergency Only" },
            ]}
          />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;