import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Airport Auto Electrics"
        description="The page you're looking for doesn't exist. Visit our homepage for car alarms, dash cams and auto electrical services in Dublin."
        path="/404"
        noindex
      />
      <section className="page-section not-found-section">
        <div className="container text-center">
          <h1 className="page-section-heading">Page Not Found</h1>
          <p className="page-section-text">
            Sorry, we couldn&apos;t find that page.
          </p>
          <Link to="/" className="btn btn-call">
            Back to Homepage
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
