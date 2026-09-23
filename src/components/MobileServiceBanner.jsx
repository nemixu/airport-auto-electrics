import { faPhone, faVanShuttle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function MobileServiceBanner({ id }) {
  return (
    <section className="mobile-service" id={id}>
      <div className="container">
        <div className="mobile-service-inner">
          <FontAwesomeIcon
            icon={faVanShuttle}
            className="mobile-service-icon"
          />
          <div className="mobile-service-content">
            <p className="section-eyebrow">Mobile Fitting Service</p>
            <h2 className="mobile-service-heading">
              We Come To You &mdash; Fitted At Your Convenience
            </h2>
            <p className="mobile-service-text">
              Can&apos;t leave your car with us? No problem. Our qualified
              auto electricians offer a mobile service and will come to you
              to install car alarms, dash cams and more, at a time that
              suits you.
            </p>
          </div>
          <a href="tel:+353872309097" className="btn btn-call mobile-service-btn">
            <FontAwesomeIcon icon={faPhone} className="pr-2" /> Book a mobile
            fitting
          </a>
        </div>
      </div>
    </section>
  );
}

export default MobileServiceBanner;
