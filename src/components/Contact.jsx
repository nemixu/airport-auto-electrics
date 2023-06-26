import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="contact-header text-white display-4 mb-5">
              Get in touch
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="contact-info">
              <p className="balance">
                Unit 17, Collinstown Cross Industrial Estate, Old Airport Rd,
                Cloghran, Dublin
              </p>
              <div className="contact-items">
                <a href="tel:+353872309097">
                  <FontAwesomeIcon icon={faPhone} className="icon-colour" />
                  <span className="px-2">087 230 90 97</span>
                </a>
              </div>
              <div className="contact-items">
                <a
                  href="mailto:airportautoelec@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="icon-colour" />
                  <span className="px-2">airportautoelec@gmail.com</span>
                </a>
              </div>
              <div className="contact-items">
                <a
                  href="http://m.me/AirportAutoElectrics"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <FontAwesomeIcon icon={faFacebook} className="icon-colour" />
                  <span className="px-2">Facebook Messenger</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <div className="contact-map">
              <iframe
                className="rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.8812998498215!2d-6.240260384007048!3d53.416948977121336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486711c610a2e9c5%3A0xde59b8b2fefeaa65!2sAirport+Alarms+%26+Auto+Electrics!5e0!3m2!1sen!2sie!4v1528809025079"
                width="100%"
                height="100%"
                style={{ border: '0' }}
                allowFullScreen=""
                title="Contact Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
