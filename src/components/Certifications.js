// src/components/Certifications.js
import React from 'react';

function Certifications() {
  return (
    <section id="certifications" className="container">
      <h2 className="section-heading"><span className="gradient-text">Expertise Validation</span></h2>
      <div className="certification-badges">
        <div className="badge">
          <i className="fab fa-napster"></i>
          <a href="https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs21/Course/NPTEL25CS21S104220330604295667.pdf" target="_blank" rel="noopener noreferrer">
            NPTEL Deep Learning
          </a>
        </div>
        <div className="badge">
          <i className="fas fa-database"></i>
          <a href="https://www.coursera.org/account/accomplishments/specialization/YJQXD74FWTY7" target="_blank" rel="noopener noreferrer">
            Coursera Data Science
          </a>
        </div>
        <div className="badge">
          <i className="fas fa-brain"></i>
          <a href="https://www.coursera.org/account/accomplishments/verify/RQBFUJWWJUHP" target="_blank" rel="noopener noreferrer">
            Coursera DBMS with SQL
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;