import React from "react";
import "../CSS/Testimonials.css";

const testimonials = [
  {
    name: "Wilma Mumduya",
    image: "./assets/customer-1-png.svg",
    quote:
      "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.",
  },
  {
    name: "Jimmy Changa",
    image: "./assets/customer-2-png.svg",
    quote:
      "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.",
  },
  {
    name: "Wilma Mumduya",
    image: "./assets/customer-3-png.svg",
    quote:
      "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="heading">
        <div className="background"></div>
        <h2 className="title">Customers Say About Us</h2>
      </div>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">{"★".repeat(5)}</div>
            <p className="quote">"{testimonial.quote}"</p>
            <div className="customer-info">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="customer-image"
              />
              <span className="customer-name">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
