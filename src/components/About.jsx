import {
  faCircleCheck,
  faEuroSign,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AboutIllustration from '../Images/car2.jpg';

const features = [
  {
    icon: faCircleCheck,
    title: 'Fully Qualified Auto Electricians',
    description:
      'Our team of qualified auto electricians with over 38 years experience in the motor industry.',
  },
  {
    icon: faWrench,
    title: 'Excellent Service',
    description:
      'Our goal is to provide excellent service with fast and professional completion, minimizing inconvenience and delays.',
  },
  {
    icon: faEuroSign,
    title: 'Competitive Prices',
    description:
      'We offer extremely competitive prices for our services. Contact us today to get a quote.',
  },
];

function About() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="row align-items-center about-intro-row">
          <div className="col-lg-6">
            <p className="section-eyebrow">About Us</p>
            <h2 className="about-us-header">
              Auto Electricians Near Dublin Airport
            </h2>
            <p className="about-us-text">
              Airport Auto Electrics has been North Dublin&apos;s go-to auto
              electrician for over 38 years, working out of Cloghran on the
              doorstep of Dublin Airport for the last 30 of them. Every job,
              from a simple fault to a full security system install, is
              carried out by qualified, time-served auto electricians who
              know Irish vehicles inside out.
            </p>
            <p className="about-us-text">
              We are the sole Irish agents for Patrolline car alarms, and we
              also supply and fit GPS tracking systems, Azdome and Q6 dash cams, reverse cameras and parking sensors,
              Android Auto &amp; Apple CarPlay stereo upgrades, alternators,
              starter motors, and full auto-electrical fault finding and
              diagnostics. Easily reached from Dublin Airport, we offer competitive rates, honest advice and fast
              turnaround for drivers across Dublin, Co.Dublin and surrounding areas.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={AboutIllustration}
              alt="Auto electrician servicing a car at Airport Auto Electrics"
              className="about-us-image"
            />
          </div>
        </div>

        <div className="row g-4 about-features-row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="about-feature-card">
                <span className="about-feature-icon-badge">
                  <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
                </span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
