import {
  faCarBurst,
  faMobileScreenButton,
  faShieldHalved,
  faSquareParking,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { faqSchema, localBusinessSchema, serviceSchema } from '../seoData';

const benefits = [
  {
    icon: faShieldHalved,
    title: 'Clear Evidence After an Accident',
    description:
      'Dash cam footage gives you clear evidence for insurance claims if you are involved in a collision, whether it is your fault or not.',
  },
  {
    icon: faSquareParking,
    title: 'Parking Mode',
    description:
      'Our dash cams include parking mode, keeping watch over your car while it is parked so knocks, bumps and break-ins are on record.',
  },
  {
    icon: faCarBurst,
    title: 'Collision Sensor',
    description:
      'A built-in collision sensor detects an impact and automatically protects the recording, so the footage that matters is not lost.',
  },
  {
    icon: faMobileScreenButton,
    title: 'App Enabled',
    description:
      'Connect to your dash cam from your smartphone through the app to view, download and share footage without removing the memory card.',
  },
];

const faqItems = [
  {
    question: 'What dash cams do you supply and fit?',
    answer:
      'We supply and fit Azdome and Q6 dash cams. Both are app enabled and come with parking mode and a collision sensor. Call us and we will recommend the right one for your car.',
  },
  {
    question: 'Do your dash cams work while my car is parked?',
    answer:
      'Yes. Our Azdome and Q6 dash cams have parking mode, so they can keep watch over your car while it is parked. We will set the camera up to suit your vehicle when we fit it.',
  },
  {
    question: 'What does the collision sensor do?',
    answer:
      'The collision sensor detects a sudden impact, such as a crash or a knock while parked, and automatically protects the recording so it is not overwritten.',
  },
  {
    question: 'What does app enabled mean?',
    answer:
      'You can connect the dash cam to the app on your smartphone to view, download and share your footage, rather than having to remove the memory card and use a computer.',
  },
  {
    question: 'Can you hide the dash cam wiring?',
    answer:
      'Yes, we route and hide the cabling behind trim so the finish looks clean and tidy, rather than leaving a visible cable running down your windscreen.',
  },
  {
    question: 'Will a dash cam help with my insurance claim?',
    answer:
      'Dash cam footage can provide useful evidence to support an insurance claim after a collision, near-miss or dispute over fault, though acceptance is ultimately at your insurer’s discretion.',
  },
];

function DashCams() {
  const description =
    'Azdome and Q6 app-enabled dash cams with parking mode and collision sensors, supplied and fitted in Dublin by qualified auto electricians near Dublin Airport and Cloghran.';

  return (
    <>
      <SEO
        title="Dash Cam Fitting Dublin | Azdome & Q6 Dash Cams | Airport Auto Electrics"
        description={description}
        path="/dash-cams"
        jsonLd={[
          localBusinessSchema('/dash-cams'),
          serviceSchema({
            name: 'Dash Cam Supply & Fitting',
            description,
            path: '/dash-cams',
            brands: ['Azdome', 'Q6'],
          }),
          faqSchema(faqItems),
        ]}
      />

      <PageHero
        eyebrow="Dash Cameras"
        title="Azdome & Q6 Dash Cam Fitting in Dublin"
        subtitle="App-enabled dash cams with parking mode and collision sensors, neatly fitted by qualified auto electricians near Dublin Airport and Cloghran."
      />

      <section className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="page-section-heading">
                Protect Yourself On Every Journey
              </h2>
              <p className="page-section-text">
                A dash cam is one of the most useful pieces of kit you can add
                to your car. It gives you an independent record of what
                happened if you are involved in a collision, a dispute over
                fault, or an attempted insurance scam, and with parking mode
                and a collision sensor it can also capture incidents while
                your car is parked.
              </p>
              <p className="page-section-text">
                We supply and fit Azdome and Q6 dash cams from our workshop
                in Cloghran, next to Dublin Airport. Every camera is app
                enabled and fitted neatly with hidden wiring, rather than
                left as a cheap suction-mounted unit with cables hanging
                across your windscreen.
              </p>
            </div>
            <div className="col-md-6">
              <div className="brand-showcase">
                <FontAwesomeIcon
                  icon={faVideo}
                  className="brand-showcase-icon"
                />
                <p className="brand-showcase-name">Azdome &amp; Q6</p>
                <p className="brand-showcase-tagline">
                  App-enabled dash cams
                </p>
                <p className="brand-showcase-badge">
                  Parking mode &middot; Collision sensor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-alt">
        <div className="container">
          <h2 className="page-section-heading text-center mb-5">
            Why Fit a Dash Cam
          </h2>
          <div className="row">
            {benefits.map((benefit, index) => (
              <div className="col-sm-6 col-lg-3 mb-4" key={index}>
                <div className="benefit-card">
                  <FontAwesomeIcon
                    icon={benefit.icon}
                    className="benefit-icon"
                  />
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container text-center">
          <h2 className="page-section-heading mb-4">
            Also Fitting Reverse Cameras & Parking Sensors
          </h2>
          <p className="page-section-text">
            If you want cover for reversing and parking as well as journeys,
            we also install reverse cameras and parking sensors. See our full{' '}
            <Link to="/#services">range of auto electrical services</Link>,
            or ask us about combining a dash cam and reverse camera fit in one
            visit.
          </p>
        </div>
      </section>

      <FAQSection heading="Dash Cam FAQs" items={faqItems} />

      <CTASection
        heading="Book Your Dash Cam Fitting"
        text="Call our Cloghran workshop or see what local drivers say about us on Google."
      />
    </>
  );
}

export default DashCams;
