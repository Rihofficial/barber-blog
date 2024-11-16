import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/Images/Logo/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <nav className="navbar">
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="menu-wrapper">
          <ul className="nav-menu">
            <li
              className="nav-list"
              onClick={() => {
                setMenu("home");
              }}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className="nav-list"
              onClick={() => {
                setMenu("about");
              }}
            >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li
              className="nav-list"
              onClick={() => {
                setMenu("services");
              }}
            >
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li
              className="nav-list"
              onClick={() => {
                setMenu("gallery");
              }}
            >
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>

            <li
              className="nav-list"
              onClick={() => {
                setMenu("blog");
              }}
            >
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li
              className="nav-list"
              onClick={() => {
                setMenu("contact");
              }}
            >
              <Link className="nav-link" to="/contact">
                Contacts
              </Link>
            </li>
          </ul>
          <button className="nav-btn">free quote</button>
        </div>

        <div className="menubar">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
