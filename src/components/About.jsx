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
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h3 className="about-us-header display-4">About Us</h3>
          </div>
          <div className="col-12 text-center text-white">
            <p className="about-us-text">
              Airport Auto Electrics is Dublin's leading specialist in car
              electrics.
            </p>
            <p className="about-us-text pb-5 mb-5">
              We provide a range of products and services to cover all your auto
              electrical needs, including vehicle security systems, rotating
              electricals, parking assist systems, GPS tracking, and fault
              finding. Conveniently located near Dublin Airport, M50, and M1
              motorways.
            </p>
          </div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-sm-12 col-md-4 text-center about-us-statement-box"
            >
              <div className="feature about-us-statement-box-inner">
                <i className={`feature-icon ${feature.icon}`}></i>
                <h4 className="feature-title text-white">{feature.title}</h4>
                <p className="feature-description text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
