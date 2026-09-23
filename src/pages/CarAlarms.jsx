import {
  faFlag,
  faLocationDot,
  faScrewdriverWrench,
  faShieldHalved,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { faqSchema, localBusinessSchema, serviceSchema } from '../seoData';

const patrollineHighlights = [
  {
    icon: faFlag,
    title: 'Sole Agents in Ireland',
    description:
      'Airport Auto Electrics is the sole agent representing Patrolline in Ireland, so your alarm comes straight from the people who look after the brand here.',
  },
  {
    icon: faStar,
    title: 'Italian Manufactured',
    description:
      "Patrolline alarm systems are high-quality, Italian-manufactured products, chosen because we are confident in what we fit to our customers' cars.",
  },
  {
    icon: faScrewdriverWrench,
    title: 'Professionally Fitted',
    description:
      'Every Patrolline system is installed at our Cloghran workshop by qualified auto electricians, wired in properly rather than as an afterthought.',
  },
];

const benefits = [
  {
    icon: faShieldHalved,
    title: 'Deter Theft & Break-Ins',
    description:
      'A visible, audible alarm is one of the simplest ways to make your car a harder target in car parks, on driveways and on the street.',
  },
  {
    icon: faStar,
    title: 'Italian-Made Quality',
    description:
      'Patrolline systems are built in Italy to a high standard, giving you a security system you can rely on day after day.',
  },
  {
    icon: faLocationDot,
    title: 'GPS Tracking Available',
    description:
      'We also fit GPS tracking systems so you know where your vehicle is, useful for family cars, vans and work vehicles.',
  },
  {
    icon: faScrewdriverWrench,
    title: 'Fitted By Qualified Electricians',
    description:
      "Our auto electricians wire every alarm in correctly so it works with your car's existing electrics without causing faults.",
  },
];

const faqItems = [
  {
    question: 'What car alarm brand do you fit?',
    answer:
      'We fit Patrolline car alarms only. Patrolline systems are high-quality, Italian-manufactured alarms, and Airport Auto Electrics is the sole agent for Patrolline in Ireland.',
  },
  {
    question: 'Where can I buy Patrolline car alarms in Ireland?',
    answer:
      'Airport Auto Electrics is the sole Patrolline agent in Ireland. Call us on 087 230 90 97 or call into our workshop in Cloghran, near Dublin Airport, to arrange supply and fitting.',
  },
  {
    question: 'How much does it cost to fit a car alarm?',
    answer:
      'Pricing depends on your vehicle and the system that suits it best. Call us on 087 230 90 97 with your vehicle details and we will give you a clear quote.',
  },
  {
    question: 'How long does fitting a car alarm take?',
    answer:
      'Fitting time depends on the vehicle and the system chosen. We will confirm how long your car will be with us when you book it in at our Cloghran workshop.',
  },
  {
    question: 'Can you fit a Patrolline alarm to my car?',
    answer:
      'Give us a call with the make, model and year of your vehicle and we will confirm the right Patrolline system for it.',
  },
  {
    question: 'Do you also offer GPS tracking for vehicles?',
    answer:
      'Yes, alongside car alarms we fit GPS tracking systems, useful for personal vehicles, work vans and small fleets that need location visibility.',
  },
];

function CarAlarms() {
  const description =
    'Patrolline car alarms in Ireland. Airport Auto Electrics is the sole Irish agent for Patrolline, high-quality Italian-manufactured car alarm systems, supplied and fitted near Dublin Airport.';

  return (
    <>
      <SEO
        title="Patrolline Car Alarms Ireland | Sole Irish Agents | Airport Auto Electrics"
        description={description}
        path="/car-alarms"
        jsonLd={[
          localBusinessSchema('/car-alarms'),
          serviceSchema({
            name: 'Patrolline Car Alarm Supply & Fitting',
            description,
            path: '/car-alarms',
            brands: ['Patrolline'],
          }),
          faqSchema(faqItems),
        ]}
      />

      <PageHero
        eyebrow="Sole Irish Agents"
        title="Patrolline Car Alarms in Dublin"
        subtitle="High-quality, Italian-manufactured car alarm systems, supplied and fitted by qualified auto electricians near Dublin Airport."
      />

      <section className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="page-section-heading">
                Protect Your Car Against Theft
              </h2>
              <p className="page-section-text">
                A car is broken into or stolen every day across Dublin, and
                thieves often target vehicles left without visible security.
                At Airport Auto Electrics we supply and fit one brand of car
                alarm and stand fully behind it: Patrolline, high-quality
                alarm systems manufactured in Italy.
              </p>
              <p className="page-section-text">
                We are the sole agents for Patrolline in Ireland. Based in
                Cloghran next to Dublin Airport, we fit Patrolline alarms for
                drivers across Dublin and surrounding areas who want reliable
                protection installed properly by qualified auto electricians.
              </p>
            </div>
            <div className="col-md-6">
              <div className="brand-showcase">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="brand-showcase-icon"
                />
                <p className="brand-showcase-name">Patrolline</p>
                <p className="brand-showcase-tagline">
                  Italian-manufactured car alarm systems
                </p>
                <p className="brand-showcase-badge">
                  Sole agents in Ireland
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-alt">
        <div className="container">
          <h2 className="page-section-heading text-center mb-5">
            Why Choose Patrolline From Airport Auto Electrics
          </h2>
          <div className="row">
            {patrollineHighlights.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="brand-card">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="brand-card-icon"
                  />
                  <h3 className="brand-title">{item.title}</h3>
                  <p className="brand-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2 className="page-section-heading text-center mb-5">
            Why Fit a Car Alarm
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
          <p className="page-section-text text-center mt-4">
            Looking for something else, like dash cams or reverse cameras? See
            our full{' '}
            <Link to="/#services">range of auto electrical services</Link>.
          </p>
        </div>
      </section>

      <FAQSection heading="Patrolline Car Alarm FAQs" items={faqItems} />

      <CTASection
        heading="Get a Patrolline Car Alarm Quote"
        text="Call our Cloghran workshop or check out our reviews from local drivers on Google."
      />
    </>
  );
}

export default CarAlarms;
