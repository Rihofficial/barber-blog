import React from "react";
import "./Footer.css"; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contacts-info">
          <i className="fas fa-phone"></i>
          <h4>Contact Info</h4>
          <p>913-473-7000</p>
          <p className="emails">contact@cakeshop.com</p>
        </div>
        <div className="logo-section">
          <img src="./assets/logo-2-footer-png.svg" alt="Logo" />
          <p>
            There are many variations of passages of <br />Lorem Ipsum available be
            the majority.
          </p>
          <div className="social-icons">
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="icon">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
        <div className="contacts-info">
          <i className="fas fa-location-arrow"></i>
          <h4>Contact Info</h4>
          <p>913-473-7000</p>
          <p className="email">contact@cakeshop.com</p>
        </div>
      </div>
      <div className="horizontal-border"></div>
      <div className="footer-bottom">
        <p>
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <i className="fas fa-heart"></i> by{" "}
          <span className="colorlib-link">Colorlib</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
