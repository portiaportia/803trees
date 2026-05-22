import "./css/WhyChooseItem.css";

const WhyChooseItem = ({ Icon, title, text }) => {
  return (
    <article className="why-item">
      <div className="why-item-icon">
        <Icon size={26} strokeWidth={2.4} />
      </div>

      <h3 className="why-item-title">{title}</h3>
      <p className="why-item-text">{text}</p>
    </article>
  );
};

export default WhyChooseItem;