// src/components/Footer/FooterContactGroup.js

import {
  Phone,
  MessageSquare,
  MapPin,
  Mail,
  Clock3,
} from "lucide-react";

const iconMap = {
  phone: Phone,
  sms: MessageSquare,
  map: MapPin,
  mail: Mail,
  clock: Clock3,
};

const FooterContactGroup = ({ title, items }) => {
  return (
    <div className="footer-column">
      <h3 className="footer-heading">
        {title}
      </h3>

      {items.map((item, index) => {
        const Icon =
          iconMap[item.icon] || Clock3;

        const content = (
          <>
            <Icon size={16} />
            <span>{item.text}</span>
          </>
        );

        return item.href ? (
          <a
            key={`${item.text}-${index}`}
            href={item.href}
            className="footer-contact-item"
          >
            {content}
          </a>
        ) : (
          <div
            key={`${item.text}-${index}`}
            className="footer-contact-item"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default FooterContactGroup;