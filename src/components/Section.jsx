import "../CSS/Section.css";
import service1 from "../assets/Images/Icon/services1.svg";
import service2 from "../assets/Images/Icon/services2.svg";
import service3 from "../assets/Images/Icon/services3.svg";

const services = [
  {
    title: "Stylish hair cut",
    description:
      "Available be the majority have\nsuffered alteration in some\nform, by injected humour.",
    image: service1,
  },
  {
    title: "Cut & hair style",
    description:
      "Available be the majority have\nsuffered alteration in some\nform, by injected humour.",
    image: service2,
  },
  {
    title: "Color & hair wash",
    description:
      "Available be the majority have\nsuffered alteration in some\nform, by injected humour.",
    image: service3,
  },
];

const Section = () => {
  return (
    <div className="services-section">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img
            src={service.image}
            alt={service.title}
            className="service-icon"
          />
          <h5 className="service-title">{service.title}</h5>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Section;
