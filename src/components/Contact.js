// src/components/Contact.js
import React from 'react';

function Contact() {
    return (
        <section id="contact" className="container">
            <h2 className="section-heading"><span className="gradient-text">Connect & Collaborate</span></h2>
            <div className="contact-info">
                <div className="contact-card">
                    <h3>📩 Got Mail?</h3>
                    <p>deekshithdeepith12042004@gmail.com</p>
                    <a href="mailto:deekshithdeepith12042004@gmail.com" style={{ color: "#64ffda" }} target="_blank" rel="noopener noreferrer">Email Me</a>
                </div>
                <div className="contact-card">
                    <h3>💻 For Collaborations</h3>
                    <a href="https://github.com/ndeekshith" style={{ color: "#64ffda" }} target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </section>
    );
}

export default Contact;