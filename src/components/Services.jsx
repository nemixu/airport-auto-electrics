import React from 'react';
import Altenator from '../Images/alternator.png';
import Audio from '../Images/audio.png';
import Dash from '../Images/dash.png';
import Fault from '../Images/diagnostic.png';
import LED from '../Images/led.png';
import Cam from '../Images/reverse.png';
import Sensor from '../Images/sensor.png';
import Starter from '../Images/starter.png';
import Tracker from '../Images/tracker.png';
import Security from '../Images/tytan-security.png';

const servicesData = [
  {
    title: 'Car Security Systems',
    image: Security,
    description:
      'We offer a wide range of car security systems from leading systems from Tytan Car alarms, Avital Car alarms and Sterling Car imobilizers',
  },
  {
    title: 'Android Auto Car Audio Upgrades',
    image: Audio,
    description:
      'We offer in car Audio upgrades with the most recent 7inch car screens running Android which features android auto. Car specific upgrades to fit perfectly in your make and model.',
  },
  {
    title: 'Dash Cameras',
    image: Cam,
    description:
      'We offer Thinkware Dashcams supplied and fitted to ensure you are safe and protected on the roads.',
  },
  {
    title: 'Starter Motors',
    image: Starter,
    description: 'We repair and provide new starter motors',
  },
  {
    title: 'Alternators',
    image: Altenator,
    description: 'We repair and provide new alternators',
  },
  {
    title: 'Vehicle Security',
    image: Security,
    description:
      'We offer vehicle security system installation and maintenance',
  },
  {
    title: 'Dash Camera',
    image: Dash,
    description:
      'We install dash cameras for enhanced vehicle safety and monitoring',
  },
  {
    title: 'Reverse Cameras',
    image: Cam,
    description: 'We install reverse cameras for improved rearview visibility',
  },
  {
    title: 'Reverse Sensors',
    image: Sensor,
    description: 'We install reverse sensors for better parking assistance',
  },
  {
    title: 'GPS Tracking',
    image: Tracker,
    description:
      'We offer GPS tracking system installation for vehicle tracking and security',
  },
  {
    title: 'Car Audio Upgrades',
    image: Audio,
    description: 'We offer car audio system upgrades and installations',
  },
  {
    title: 'Fault Finding',
    image: Fault,
    description:
      'We specialize in fault finding and diagnostics for vehicle electrical systems',
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="services-header display-4 mb-5">Services</h3>
          </div>
          {servicesData.map((service, index) => (
            <div
              className="col-sm-6 col-md-4 text-center services-text"
              key={index}
            >
              <h4>{service.title}</h4>
              <img
                className="services-images"
                src={service.image}
                alt={service.title}
              />
              <div className="overlay-services">
                <div className="text">{service.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
