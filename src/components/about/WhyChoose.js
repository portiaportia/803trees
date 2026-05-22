import "./css/WhyChoose.css";
import { MapPinned, Wrench, Check } from "lucide-react";
import WhyChooseItem from "./WhyChooseItem";

const items = [
  {
    Icon: MapPinned,
    title: "Local & Reliable",
    text: "Based in the area and committed to showing up on time.",
  },
  {
    Icon: Wrench,
    title: "Fully Equipped",
    text: "We have the tools and equipment to handle jobs of any size.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="why-section" id="about">
      <div className="why-inner">
        <div className="why-intro">
          <div className="why-intro-icon">
            <Check size={34} strokeWidth={2.5} />
          </div>

          <h2 className="why-title">Why Choose 803 Tree?</h2>

          <p className="why-text">
            We are a local, reliable team that takes pride in every job, large or small.
            With the right equipment and the experience to back it up, we get the work
            done safely and professionally.
          </p>
        </div>

        <div className="why-items">
          {items.map((item) => (
            <WhyChooseItem
              key={item.title}
              Icon={item.Icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;