// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/ndeekshith" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/deekshith-n-92652b2b2/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://x.com/deekshi17945724?s=21" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/deekshii._?igsh=MWYzbzkyYnV2bXNuZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p>By Deekshith N | © 2026  Nothing is Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;