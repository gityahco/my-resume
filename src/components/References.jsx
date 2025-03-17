import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons

const References = () => {
  return (
    <section className="references">
      <h2>References</h2>
      <div className="reference">
        <h3>Mostafa Alayesh</h3>
        <p>Annecto Telecom</p>
        <p>Tech Lead</p>
        <p>
          <a
            href="tel:+447942374444"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <FaPhone style={{ marginRight: '8px' }} /> Phone: +44 7942 374444
          </a>
        </p>
        <p>
          <a
            href="mailto:mostafa@annecto.com"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <FaEnvelope style={{ marginRight: '8px' }} /> Email: mostafa@annecto.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default References;