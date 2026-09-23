import React from 'react';
import SEO from './SEO';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import { localBusinessSchema } from '../seoData';

function Home() {
  return (
    <>
      <SEO
        title="Airport Auto Electrics | Auto Electricians Dublin Airport & North Dublin"
        description="Airport Auto Electrics is North Dublin's trusted auto electrician, based next to Dublin Airport. Car alarms, immobilisers, dash cams, reverse cameras, alternators, starter motors and fault finding, fitted by qualified electricians with 30+ years' experience."
        path="/"
        jsonLd={localBusinessSchema('/')}
      />
      <section className="bg-image" id="home">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="landing-text display-4 text-white">
                Airport Auto Electrics
              </h1>
              <p className="sub-landing-text text-white">
                Dublin Airport &amp; North Dublin's trusted auto electricians
                &mdash; car alarms, dash cams &amp; vehicle electrics
              </p>
              <a
                href="tel:+353872309097"
                target="_blank"
                className="btn btn-call"
                rel="noreferrer"
              >
                <i className="fas fa-calendar-alt pr-2"></i>CALL US TODAY
              </a>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default Home;
