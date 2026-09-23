import { faShieldHalved, faVanShuttle, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Altenator from '../Images/alternator.png';
import Fault from '../Images/diagnostic.png';
import Cam from '../Images/reverse.png';
import Sensor from '../Images/sensor.png';
import Starter from '../Images/starter.png';
import Audio from '../Images/stereo3.jpeg';

const servicesData = [
  {
    title: 'Patrolline Car Alarms',
    icon: faShieldHalved,
    description:
      'Sole agents in Ireland for Patrolline, high-quality Italian-manufactured car alarm systems, supplied and professionally fitted by our qualified auto electricians.',
    link: '/car-alarms',
    linkText: 'Patrolline car alarm systems',
  },
  {
    title: 'Android Auto Car Audio Upgrades',
    image: Audio,
    description:
      'In-car audio upgrades with 7", 9" and 10" Android touchscreens featuring Android Auto and Apple CarPlay, professionally fitted to suit your exact make and model.',
  },
  {
    title: 'Dash Cameras',
    icon: faVideo,
    description:
      'Azdome and Q6 app-enabled dash cams with parking mode and collision sensors, supplied and fitted so you have evidence on hand after an accident, near-miss or parking knock.',
    link: '/dash-cams',
    linkText: 'Dash cam options & fitting',
  },
  {
    title: 'Starter Motors',
    image: Starter,
    description:
      'Diagnosis, repair and replacement of car starter motors, keeping your vehicle starting reliably every time.',
  },
  {
    title: 'Alternators',
    image: Altenator,
    description:
      'Alternator testing, repair and replacement to keep your battery charged and your electrics running properly.',
  },
  {
    title: 'Reverse Cameras',
    image: Cam,
    description:
      'Reverse camera installation for clearer rearview visibility, making tight parking spaces and reversing safer.',
  },
  {
    title: 'Reverse Sensors',
    image: Sensor,
    description:
      'Front and rear parking sensor fitting for extra confidence when parking in busy Dublin streets and car parks.',
  },
  {
    title: 'Mobile Fitting Service',
    icon: faVanShuttle,
    description:
      'Cannot get to us? We come to you and install at your convenience, so you can get a car alarm, dash cam or other fitting done without losing your day.',
  },
  {
    title: 'Auto Electrical Fault Finding',
    image: Fault,
    description:
      'Expert fault finding and diagnostics for wiring, sensor and electrical issues across all vehicle makes and models.',
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="text-center services-heading-wrap">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="services-header">
            Auto Electrical Services in Dublin
          </h2>
          <p className="services-subheading">
            From vehicle security to full auto-electrical diagnostics, here
            is everything we supply and fit at our Cloghran workshop.
          </p>
        </div>
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="service-card">
                <div className="service-card-image-wrap">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={`${service.title} fitted by Airport Auto Electrics in Dublin`}
                      loading="lazy"
                      className="service-card-image"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="service-card-icon"
                    />
                  )}
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-text">{service.description}</p>
                  {service.link && (
                    <Link to={service.link} className="service-card-link">
                      {service.linkText} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
