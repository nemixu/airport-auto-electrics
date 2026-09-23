import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { GOOGLE_BUSINESS_URL } from '../seoData';

function CTASection({ heading, text }) {
  return (
    <section className="cta-section">
      <div className="container text-center">
        <h2 className="cta-heading">{heading}</h2>
        {text && <p className="cta-text">{text}</p>}
        <div className="cta-buttons">
          <a href="tel:+353872309097" className="btn btn-call">
            <FontAwesomeIcon icon={faPhone} className="pr-2" /> 087 230 90 97
          </a>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-google-review"
          >
            <FontAwesomeIcon icon={faGoogle} className="pr-2" /> Read Our
            Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
