import {
  faBell,
  faLocationDot,
  faLock,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Security from '../Images/tytan-security.png';
import Tracker from '../Images/tracker.png';
import { faqSchema, localBusinessSchema, serviceSchema } from '../seoData';

const brands = [
  {
    title: 'Tytan Car Alarms',
    description:
      'Reliable, feature-rich alarm systems with remote arming, shock sensors and siren backup, fitted and set up correctly first time.',
  },
  {
    title: 'Avital Car Alarms',
    description:
      'Proven North American alarm technology offering strong perimeter protection and remote convenience features.',
  },
  {
    title: 'Sterling Immobilisers',
    description:
      'Electronic immobilisers that stop your engine being started without the correct key or fob, cutting the risk of theft.',
  },
];

const benefits = [
  {
    icon: faShieldHalved,
    title: 'Deter Theft & Break-Ins',
    description:
      'A visible, audible alarm system is one of the simplest ways to make your car a harder target for thieves in car parks, driveways and on the street.',
  },
  {
    icon: faLock,
    title: 'Immobilise the Engine',
    description:
      "An immobiliser stops your car being driven away even if someone gets inside, cutting your vehicle's power circuit until the correct key or fob is used.",
  },
  {
    icon: faLocationDot,
    title: 'GPS Tracking Available',
    description:
      'We also fit GPS tracking systems so you know where your vehicle is, giving extra peace of mind for family cars, vans and fleet vehicles.',
  },
  {
    icon: faBell,
    title: 'Fitted By Qualified Electricians',
    description:
      "Every alarm and immobiliser is wired in correctly by our experienced auto electricians, so it works with your car's existing electrics without causing faults.",
  },
];

const faqItems = [
  {
    question: 'What car alarm brands do you fit in Dublin?',
    answer:
      'We supply and fit Tytan car alarms, Avital car alarms and Sterling immobilisers, chosen to suit your vehicle, budget and level of security required.',
  },
  {
    question: 'How much does it cost to fit a car alarm?',
    answer:
      'Pricing depends on the make and model of your vehicle and the system you choose. Call us on 087 230 90 97 and we will talk you through your options and give you a clear quote.',
  },
  {
    question: 'How long does fitting a car alarm take?',
    answer:
      'Most car alarm and immobiliser installations are completed the same day at our Cloghran workshop, close to Dublin Airport. We will confirm timing when you book.',
  },
  {
    question: 'Can you fit a car alarm to any make or model?',
    answer:
      'Our auto electricians work on all makes and models. If you are unsure whether your car is suitable for an alarm or immobiliser upgrade, give us a call and we can advise.',
  },
  {
    question: 'Do you also offer GPS tracking for vehicles?',
    answer:
      'Yes, alongside alarms and immobilisers we fit GPS tracking systems, useful for personal vehicles, work vans and small fleets that need location visibility.',
  },
];

function CarAlarms() {
  const description =
    'Car alarms, immobilisers and GPS tracking fitted in Dublin. Tytan, Avital and Sterling systems supplied and fitted by qualified auto electricians near Dublin Airport, Cloghran and Swords.';

  return (
    <>
      <SEO
        title="Car Alarms & Immobilisers Dublin | Airport Auto Electrics"
        description={description}
        path="/car-alarms"
        jsonLd={[
          localBusinessSchema('/car-alarms'),
          serviceSchema({
            name: 'Car Alarm & Immobiliser Fitting',
            description,
            path: '/car-alarms',
          }),
          faqSchema(faqItems),
        ]}
      />

      <PageHero
        eyebrow="Vehicle Security"
        title="Car Alarms & Immobilisers in Dublin"
        subtitle="Tytan, Avital and Sterling systems supplied and fitted by qualified auto electricians near Dublin Airport, Cloghran and Swords."
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
                At Airport Auto Electrics we supply and fit car alarms,
                immobilisers and GPS trackers that make your vehicle a far
                harder target, wired in properly by qualified auto
                electricians rather than fitted as an afterthought.
              </p>
              <p className="page-section-text">
                Based in Cloghran next to Dublin Airport, we regularly fit
                security systems for drivers across Swords, Santry, North
                Dublin and beyond who want reliable protection without the
                dealership price tag.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={Security}
                alt="Tytan car alarm and vehicle security system fitted by Airport Auto Electrics"
                className="page-section-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-alt">
        <div className="container">
          <h2 className="page-section-heading text-center mb-5">
            Why Fit a Car Alarm or Immobiliser
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
        <div className="container">
          <h2 className="page-section-heading text-center mb-5">
            Brands & Systems We Fit
          </h2>
          <div className="row">
            {brands.map((brand, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="brand-card">
                  <h3 className="brand-title">{brand.title}</h3>
                  <p className="brand-description">{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt-4">
            <div className="col-12 text-center">
              <img
                src={Tracker}
                alt="GPS vehicle tracking system fitted by Airport Auto Electrics"
                className="page-section-image-small"
              />
              <p className="page-section-text mt-3">
                Looking for something else, like dash cams or reverse
                cameras? See our full{' '}
                <Link to="/#services">range of auto electrical services</Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        heading="Car Alarm & Immobiliser FAQs"
        items={faqItems}
      />

      <CTASection
        heading="Get a Car Alarm Quote Today"
        text="Call our Cloghran workshop or check out our reviews from local drivers on Google."
      />
    </>
  );
}

export default CarAlarms;
