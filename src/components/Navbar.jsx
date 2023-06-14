import React from 'react';
import logo from '../Images/blue-orange-logo.png';
import MobileNavbar from './MobileNavbar';

function Navbar() {
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
              <a aria-label="home" href="#home">
                Home
              </a>
            </li>
            <li className="nav-main-list-items">
              <a aria-label="about" href="#about">
                About
              </a>
            </li>
            <li className="nav-main-list-items">
              <a aria-label="services" href="#services">
                Services
              </a>
            </li>
            <li className="nav-main-list-items">
              <a aria-label="contact" href="#contact">
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
