// src/components/Certifications.js
import React from 'react';

function Certifications() {
  return (
    <section id="certifications" className="container">
      <h2 className="section-heading"><span className="gradient-text">Expertise Validation</span></h2>
      <div className="certification-badges">
        <div className="badge">
          <i className="fab fa-napster"></i>
          NPTEL Deep Learning
        </div>
        <div className="badge">
          <i className="fas fa-database"></i>
          Coursera Data Science
        </div>
        <div className="badge">
          <i className="fas fa-brain"></i>
          Coursera DBMS with SQL
        </div>
      </div>
    </section>
  );
}

export default Certifications;