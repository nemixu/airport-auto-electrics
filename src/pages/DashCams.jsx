import {
  faCarSide,
  faCircleCheck,
  faShieldHalved,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import DashCamImage from '../Images/thinkware.webp';
import { faqSchema, localBusinessSchema, serviceSchema } from '../seoData';

const benefits = [
  {
    icon: faShieldHalved,
    title: 'Clear Evidence After an Accident',
    description:
      'Front and rear dash cam footage gives you clear evidence for insurance claims if you are involved in a collision, whether it is your fault or not.',
  },
  {
    icon: faCarSide,
    title: 'Parking Mode Protection',
    description:
      'Thinkware dash cams can monitor your car while it is parked, recording knocks, bumps and attempted break-ins even when the engine is off.',
  },
  {
    icon: faVideo,
    title: 'Front & Rear Recording',
    description:
      'We fit dual-channel systems that record the road ahead and behind, useful for busy Dublin traffic, junctions and reversing.',
  },
  {
    icon: faCircleCheck,
    title: 'Neat, Professional Fitting',
    description:
      'Cabling is run and hidden properly so the camera looks factory-fitted, not taped to your windscreen with wires hanging everywhere.',
  },
];

const faqItems = [
  {
    question: 'Which dash cam do you recommend?',
    answer:
      'We supply and fit Thinkware dash cams, a well-regarded brand for image quality and reliability. We can recommend a front-only or front-and-rear system based on your car and budget.',
  },
  {
    question: 'Do dash cams work while my car is parked?',
    answer:
      "Yes. Thinkware dash cams support parking mode, which can record impacts and motion around your car while it's parked, using either a hardwire kit or the camera's internal battery depending on the model.",
  },
  {
    question: 'How long does dash cam fitting take?',
    answer:
      'A standard front dash cam fit usually takes a couple of hours at our Cloghran workshop near Dublin Airport. A front and rear system with hidden cabling takes a little longer. We will confirm timing when you book.',
  },
  {
    question: 'Can you hide the dash cam wiring?',
    answer:
      'Yes, we route and hide the cabling behind trim and headlining so the finish looks clean and tidy, rather than leaving a visible cable running down your windscreen.',
  },
  {
    question: 'Will a dash cam help with my insurance claim?',
    answer:
      'Dash cam footage can provide useful evidence to support an insurance claim after a collision, near-miss or dispute over fault, though acceptance is ultimately at your insurer’s discretion.',
  },
];

function DashCams() {
  const description =
    'Thinkware dash cams supplied and fitted in Dublin. Front and rear dash cameras with parking mode, neatly fitted by qualified auto electricians near Dublin Airport and Cloghran.';

  return (
    <>
      <SEO
        title="Dash Cam Fitting Dublin | Thinkware Dash Cams | Airport Auto Electrics"
        description={description}
        path="/dash-cams"
        jsonLd={[
          localBusinessSchema('/dash-cams'),
          serviceSchema({
            name: 'Dash Cam Supply & Fitting',
            description,
            path: '/dash-cams',
          }),
          faqSchema(faqItems),
        ]}
      />

      <PageHero
        eyebrow="Dash Cameras"
        title="Dash Cam Supply & Fitting in Dublin"
        subtitle="Thinkware dash cams, neatly fitted with hidden wiring, supplied by qualified auto electricians near Dublin Airport and Cloghran."
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
                fault, or an attempted insurance scam, and can also capture
                incidents while your car is parked.
              </p>
              <p className="page-section-text">
                We supply and fit Thinkware dash cams from our workshop in
                Cloghran, next to Dublin Airport, for drivers across Swords,
                Santry and North Dublin who want reliable, well-fitted
                cameras rather than a cheap suction-mounted unit.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={DashCamImage}
                alt="Thinkware dash cam supplied and fitted by Airport Auto Electrics in Dublin"
                className="page-section-image"
              />
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
            If you are covering your car for reversing and parking as well as
            journeys, we also install reverse cameras and parking sensors.
            See our full{' '}
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
