import React from 'react';
import logo from '../Images/blue-orange-logo.png';
import MobileNavbar from './MobileNavbar';

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <nav className="nav-main justify-content-around fixed-top w-100">
      <div className="nav-main-logo">
        <a aria-label="Home" href="#home">
          <img className="logo-img" src={logo} alt="Logo of the website" />
        </a>
      </div>
      <div className="nav-main-inner d-none d-md-flex">
        <div className="nav-main-list">
          <ul className="nav-main-list-container">
            <li className="nav-main-list-items">
              <a
                aria-label="home"
                href="#home"
                onClick={(event) => handleNavClick(event, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-main-list-items">
              <a
                aria-label="about"
                href="#about"
                onClick={(event) => handleNavClick(event, 'about')}
              >
                About
              </a>
            </li>
            <li className="nav-main-list-items">
              <a
                aria-label="services"
                href="#services"
                onClick={(event) => handleNavClick(event, 'services')}
              >
                Services
              </a>
            </li>
            <li className="nav-main-list-items">
              <a
                aria-label="contact"
                href="#contact"
                onClick={(event) => handleNavClick(event, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Nav bar*/}
      <li className="list-inline-item d-block d-lg-none">
        <a
          aria-label="open navigation button"
          className="burger-button"
          href="#"
          value="none"
        ></a>
      </li>
      <MobileNavbar />
    </nav>
  );
}

export default Navbar;
//test
