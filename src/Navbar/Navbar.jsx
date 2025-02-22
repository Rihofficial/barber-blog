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

  const handleMenuChange = () => {
    setMenu(menu);
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="logo">BarberShop</div>
      {isMobile ? (
        <>
          <button
            className="menu-button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          {menuOpen && (
            <div className="dropdown-menu">
              <ul>
                <li onClick={() => handleMenuChange("home")}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={() => handleMenuChange("about")}>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={() => handleMenuChange("services")}>
                  <Link to="/services">Services</Link>
                </li>
                <li onClick={() => handleMenuChange("gallery")}>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li onClick={() => handleMenuChange("blog")}>
                  <Link to="/blog">Blog</Link>
                </li>
                <li onClick={() => handleMenuChange("contact")}>
                  <Link to="/contact">Contacts</Link>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <div className="menu-wrapper">
          <ul className="nav-menu">
            <li className="nav-list" onClick={() => handleMenuChange("home")}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-list" onClick={() => handleMenuChange("about")}>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li
              className="nav-list"
              onClick={() => handleMenuChange("services")}
            >
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li
              className="nav-list"
              onClick={() => handleMenuChange("gallery")}
            >
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-list" onClick={() => handleMenuChange("blog")}>
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li
              className="nav-list"
              onClick={() => handleMenuChange("contact")}
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
  );
};

export default Navbar;
