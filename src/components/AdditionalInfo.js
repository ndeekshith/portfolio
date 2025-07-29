import React from 'react';

function AdditionalInfo() {
  return (
    <section id="additional" className="container">
      <h2 className="section-heading"><span className="gradient-text">Profile Details, Interests, and Hobbies</span></h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-title">Languages</h3>
          <ul className="project-details">
            <li>English</li>
            <li>Hindi</li>
            <li>Kannada</li>
          </ul>
        </div>
        <div className="project-card">
          <h3 className="project-title">Interests</h3>
          <ul className="project-details">
            <li>Data Analytics</li>
            <li>Deep Learning</li>
            <li>Statistical Modeling</li>
          </ul>
        </div>
        <div className="project-card">
          <h3 className="project-title">Hobbies</h3>
          <ul className="project-details">
            <li>Reading Novels</li>
            <li>Coding Challenges</li>
            <li>Playing Videogames</li>
          </ul>
        </div>
        {/* Added Kaggle Card */}
        <div className="project-card">
          <h3 className="project-title">Kaggle Works</h3>
          <ul className="project-details">
            <li>
              <a href="https://www.kaggle.com/ndeekshith" target="_blank" rel="noopener noreferrer">
                View Data Science Works
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AdditionalInfo;
