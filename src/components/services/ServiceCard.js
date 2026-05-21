import "./css/ServiceCard.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className="service-card">
      <div className="service-card-icon">
        <img className="service-card-icon" src={icon} />
      </div>

      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-text">{description}</p>
    </article>
  );
};

export default ServiceCard;