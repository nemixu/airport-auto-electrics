import React from 'react';
import Altenator from '../Images/alternator.png';
import Dash from '../Images/dash.png';
import Fault from '../Images/diagnostic.png';
import LED from '../Images/led.png';
import Cam from '../Images/reverse.png';
import Sensor from '../Images/sensor.png';
import Starter from '../Images/starter.png';
import Audio from '../Images/stereo3.jpeg';
import DashCam from '../Images/thinkware.webp';
import Tracker from '../Images/tracker.png';
import Security from '../Images/tytan-security.png';

const servicesData = [
  {
    title: 'Vehicle Security Systems',
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
    image: DashCam,
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
        <h3 className="services-header display-4 mb-5">What we do</h3>
        <div className="row">
          {servicesData.map((service, index) => (
            <div
              className={`col-sm-6 col-md-6 d-flex align-items-stretch ${
                index % 2 === 0 ? 'justify-content-end' : ''
              }`}
              key={index}
            >
              <div className="card service-card">
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.title}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                  {/* <button className="btn btn-primary">Learn More</button> */}
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
