import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { GOOGLE_BUSINESS_URL } from '../seoData';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row site-footer-row">
          <div className="col-md-4 site-footer-col">
            <h2 className="site-footer-heading">Airport Auto Electrics</h2>
            <p className="site-footer-text">
              Auto electricians serving Dublin Airport, Cloghran, Swords and
              North Dublin for over 30 years.
            </p>
            <p className="site-footer-text">
              Unit 17, Collinstown Cross Industrial Estate, Old Airport Rd,
              Cloghran, Dublin
            </p>
          </div>
          <div className="col-md-4 site-footer-col">
            <h2 className="site-footer-heading">Quick Links</h2>
            <ul className="site-footer-links">
              <li>
                <Link to="/#services">Services</Link>
              </li>
              <li>
                <Link to="/car-alarms">Car Alarms</Link>
              </li>
              <li>
                <Link to="/dash-cams">Dash Cams</Link>
              </li>
              <li>
                <Link to="/#about">About Us</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 site-footer-col">
            <h2 className="site-footer-heading">Get In Touch</h2>
            <a href="tel:+353872309097" className="site-footer-contact-link">
              <FontAwesomeIcon icon={faPhone} className="icon-colour" />
              <span className="px-2">087 230 90 97</span>
            </a>
            <a
              href="mailto:airportautoelec@gmail.com"
              className="site-footer-contact-link"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon-colour" />
              <span className="px-2">airportautoelec@gmail.com</span>
            </a>
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noreferrer"
              className="site-footer-contact-link"
            >
              <FontAwesomeIcon icon={faGoogle} className="icon-colour" />
              <span className="px-2">Find us &amp; leave a review on Google</span>
            </a>
            <a
              href="http://m.me/AirportAutoElectrics"
              target="_blank"
              rel="noreferrer"
              className="site-footer-contact-link"
            >
              <FontAwesomeIcon icon={faFacebook} className="icon-colour" />
              <span className="px-2">Facebook Messenger</span>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center site-footer-copyright">
            &copy; {year} Airport Auto Electrics. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
