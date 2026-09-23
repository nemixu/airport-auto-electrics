import React from 'react';

function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container text-center">
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHero;
