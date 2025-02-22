import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/Images/Logo/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <nav className="navbar">
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="logo">BarberShop</div>
        {isMobile ? (
          <>
            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
            {menuOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li
                    onClick={() => {
                      setMenu("home");
                    }}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    onClick={() => {
                      setMenu("about");
                    }}
                  >
                    <Link to="/about">About</Link>
                  </li>
                  <li
                    onClick={() => {
                      setMenu("services");
                    }}
                  >
                    <Link to="/services">Services</Link>
                  </li>
                  <li
                    onClick={() => {
                      setMenu("gallery");
                    }}
                  >
                    <Link to="/gallery">Gallery</Link>
                  </li>

                  <li
                    onClick={() => {
                      setMenu("blog");
                    }}
                  >
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li
                    onClick={() => {
                      setMenu("contact");
                    }}
                  >
                    <Link to="/contact">Contacts</Link>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
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
        )}
      </nav>
    </>
  );
};

export default Navbar;

