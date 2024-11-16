import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import "../CSS/WhatWE.css"; 

const WhatWE = () => {
  const [activeSection, setActiveSection] = useState(null);
  // <FaAngleDown />;
  // <FaAngleUp />;

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="section">
      <div className="container">
        <h2 className="title">
          <span className="title-background"></span>
          ALL WE DO FOR YOU
        </h2>

        <div className="accordion">
          <div
            className={`accordion-item ${
              activeSection === "hair" ? "active" : ""
            }`}
          >
            <div
              className="accordion-header"
              onClick={() => toggleSection("hair")}
            >
              <span>For Hair</span>
              <div
                
                className={`icon ${activeSection === "hair" ? "expanded" : ""}`}
              >
                {activeSection === "hair" ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {activeSection === "hair" && (
              <div className="accordion-content">
                <div className="service-item">
                  <span>Trim your Hair</span>
                  <span className="price">
                    From <span className="amount">$40</span>
                  </span>
                </div>
                <div className="service-item">
                  <span>Special Beard Treatment</span>
                  <span className="price">
                    From <span className="amount">$40</span>
                  </span>
                </div>
                <div className="service-item">
                  <span>Color your Beard</span>
                  <span className="price">
                    From <span className="amount">$40</span>
                  </span>
                </div>
                <div className="service-item">
                  <span>Wax your Beard</span>
                  <span className="price">
                    From <span className="amount">$40</span>
                  </span>
                </div>
              </div>
            )}
          </div>
          <div
            className={`accordion-item ${
              activeSection === "beard" ? "active" : ""
            }`}
          >
            <div
              className="accordion-header"
              onClick={() => toggleSection("beard")}
            >
              <span>For Beard</span>
              <div
                
                className={`icon ${
                  activeSection === "beard" ? "expanded" : ""
                }`}
              >
                {activeSection === "beard" ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {activeSection === "beard" && (
              <div className="accordion-content">
                <div className="service-item">
                  <span>Trim your Hair</span>
                  <span className="price">
                    From <span className="amount">$40</span>
                  </span>
                </div>
                <div className="service-item">
                  <span>Special Beard Treatment</span>
                  <span className="price">
                    From <span className="amount">$40</span>
                  </span>
                </div>
                <div className="service-item">
                  <span>Color your Beard</span>
                  <span className="price">
                    From <span className="amount">$40</span>
                  </span>
                </div>
                <div className="service-item">
                  <span>Wax your Beard</span>
                  <span className="price">
                    From <span className="amount">$40</span>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        className="about-image"
        src="./assets/about-2-jpg.svg"
        alt="Barber service"
      />
    </div>
  );
};

export default WhatWE;
