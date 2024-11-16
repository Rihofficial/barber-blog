import React from "react";
import "../CSS/OurPrices.css";
const OurPrices = () => {
  return (
    <div className="container">
      <div className="image-row">
        <img src="./assets/barber-1-jpg.svg" alt="Barber 1" className="image" />
        <img src="./assets/barber-2-jpg.svg" alt="Barber 2" className="image" />
        <img src="./assets/barber-3-jpg.svg" alt="Barber 3" className="image" />
        <img src="./assets/barber-4-jpg.svg" alt="Barber 4" className="image" />
        <img src="./assets/barber-5-jpg.svg" alt="Barber 5" className="image" />
        <img src="./assets/barber-6-jpg.svg" alt="Barber 6" className="image" />
      </div>
      <div className="pricing-section">
        <div className="pricing-heading">
          <div className="heading-background"></div>
          <h2>OUR TOP PRICES</h2>
        </div>
        <ul className="pricing-list">
          {[
            { service: "Special Beard Treatment", price: "$40" },
            { service: "Special Beard Treatment", price: "$40" },
            { service: "Color your Beard", price: "$40" },
            { service: "Wax your Beard", price: "$40" },
            { service: "Move your Beard", price: "$40" },
          ].map((item, index) => (
            <li key={index} className="pricing-item">
              <span className="service">{item.service}</span>
              <p className="from">From</p>
              <span className="price">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurPrices;
