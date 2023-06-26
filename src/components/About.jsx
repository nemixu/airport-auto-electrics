import React from 'react';

const features = [
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'Fully Qualified Auto Electricians',
    description:
      'Our team of qualified auto electricians has 30 years of experience in the motor industry.',
  },
  {
    icon: 'fas fa-euro-sign',
    title: 'Competitive Prices',
    description:
      'We offer extremely competitive prices for our services. Contact us today to get a quote.',
  },
  {
    icon: 'fas fa-check-circle',
    title: 'Excellent Service',
    description:
      'Our goal is to provide excellent service with fast and professional completion, minimizing inconvenience and delays.',
  },
];

function About() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="row justify-content-center about-container">
          <div className="col-12 text-center">
            <h3 className="about-us-header display-4">About Us</h3>
          </div>
          <div className="col-12 text-center text-white px-5">
            <p className="about-us-text">
              With over 30 years of experience, Airport Auto Electrics stands as
              one of Dublin's premier specialists in auto electrics. Located in
              North Dublin for the past 27 years. Qualified auto electricians
              ensures that your vehicle receives the utmost care and expertise.
            </p>
            <p className="about-us-text pb-5 mb-5">
              At Airport Auto Electrics, we offer a comprehensive range of
              products and services to meet all your auto electrical needs. From
              cutting-edge vehicle security systems to reliable rotating
              electricals, parking assist systems, GPS tracking, and fault
              finding solutions, we have you covered. Conveniently situated near
              Dublin Airport, M50, and M1 motorways, we provide competitive
              rates and prioritize swift turnaround times.
            </p>
          </div>
          <div className="d-flex justify-content-center ">
            <div className="row justify-content-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="col-sm-12 col-md-4 text-center about-us-statement-box"
                >
                  <div className="feature about-us-statement-box-inner">
                    <i className={`feature-icon ${feature.icon}`}></i>
                    <h4 className="feature-title text-white">
                      {feature.title}
                    </h4>
                    <p className="feature-description text-white">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
