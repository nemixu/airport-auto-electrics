import React from 'react';

function FAQSection({ heading = 'Frequently Asked Questions', items }) {
  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-heading text-center mb-5">{heading}</h2>
        <div className="faq-list">
          {items.map(({ question, answer }, index) => (
            <details className="faq-item" key={index}>
              <summary className="faq-question">{question}</summary>
              <p className="faq-answer">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
