import React from 'react';
import { Link } from 'react-router-dom';
import Altenator from '../Images/alternator.png';
import Fault from '../Images/diagnostic.png';
import Cam from '../Images/reverse.png';
import Sensor from '../Images/sensor.png';
import Starter from '../Images/starter.png';
import Audio from '../Images/stereo3.jpeg';
import DashCam from '../Images/thinkware.webp';
import Security from '../Images/tytan-security.png';

const servicesData = [
  {
    title: 'Car Alarms & Vehicle Security',
    image: Security,
    description:
      'Supplied and fitted car alarms and immobilisers from trusted brands including Tytan, Avital and Sterling, giving Dublin drivers real protection against theft and break-ins.',
    link: '/car-alarms',
    linkText: 'Car alarm systems & pricing',
  },
  {
    title: 'Android Auto Car Audio Upgrades',
    image: Audio,
    description:
      'In-car audio upgrades with 7", 9" and 10" Android touchscreens featuring Android Auto and Apple CarPlay, professionally fitted to suit your exact make and model.',
  },
  {
    title: 'Dash Cameras',
    image: DashCam,
    description:
      'Thinkware dash cams supplied and fitted, recording clear front and rear footage so you have evidence on hand after an accident, near-miss or parking knock.',
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
                  <img
                    src={service.image}
                    alt={`${service.title} fitted by Airport Auto Electrics in Dublin`}
                    loading="lazy"
                    className="service-card-image"
                  />
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
