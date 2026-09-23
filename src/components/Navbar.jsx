import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/blue-orange-logo.png';
import MobileNavbar from './MobileNavbar';

function Navbar() {
  return (
    <nav className="nav-main justify-content-around fixed-top w-100">
      <div className="nav-main-logo">
        <Link aria-label="Home" to="/">
          <img className="logo-img" src={logo} alt="Airport Auto Electrics logo" />
        </Link>
      </div>
      <div className="nav-main-inner d-none d-md-flex">
        <div className="nav-main-list">
          <ul className="nav-main-list-container">
            <li className="nav-main-list-items">
              <Link aria-label="home" to="/#home">
                Home
              </Link>
            </li>
            <li className="nav-main-list-items">
              <Link aria-label="about" to="/#about">
                About
              </Link>
            </li>
            <li className="nav-main-list-items">
              <Link aria-label="services" to="/#services">
                Services
              </Link>
            </li>
            <li className="nav-main-list-items">
              <Link aria-label="car alarms" to="/car-alarms">
                Car Alarms
              </Link>
            </li>
            <li className="nav-main-list-items">
              <Link aria-label="dash cams" to="/dash-cams">
                Dash Cams
              </Link>
            </li>
            <li className="nav-main-list-items">
              <Link aria-label="contact" to="/#contact">
                Contact
              </Link>
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
