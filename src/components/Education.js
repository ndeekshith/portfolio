// src/components/Education.js
import React from 'react';

function Education() {
  return (
    <section id="education" className="container">
      <h2 className="section-heading"><span className="gradient-text">Education Details</span></h2>
      <div className="education-timeline">
        <div className="education-item">
          <h3 className="project-title">M S Ramaiah University of Applied Sciences (2022-2026)</h3>
          <p>B.Tech in Artificial Intelligence & Machine Learning <br />
            GPA: 8.83</p>
        </div>
        <div className="education-item">
          <h3 className="project-title">Jawahar Navodaya Vidyalaya (2021-2022)</h3>
          <p>+1 & +2 Courses <br />
            Percentage: 83%</p>
        </div>
        <div className="education-item">
          <h3 className="project-title">Adarsha Vidyalaya (2015-2020)</h3>
          <p>SSLC <br />
            Percentage: 93.92%</p>
        </div>
      </div>
    </section>
  );
}

export default Education;