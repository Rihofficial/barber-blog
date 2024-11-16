import React from "react";
import "../CSS/Section.css";
import qheced from "../assets/Images/section-bg.jpg";

const services = [
  {
    title: "Stylish hair cut",
    description:
      "Available be the majority have\nsuffered alteration in some\nform, by injected humour.",
    image: "./assets/services-1-svg.svg",
  },
  {
    title: "Cut & hair style",
    description:
      "Available be the majority have\nsuffered alteration in some\nform, by injected humour.",
    image: "./assets/services-2-svg.svg",
  },
  {
    title: "Color & hair wash",
    description:
      "Available be the majority have\nsuffered alteration in some\nform, by injected humour.",
    image: "./assets/services-3-svg.svg",
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
