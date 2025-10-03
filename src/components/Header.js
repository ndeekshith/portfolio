// src/components/Header.js - THIS FILE IS ALREADY CORRECT

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import profilePic from '../assets/Portfolio pic.JPG';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="header">
                <nav className="nav-container">
                    <div className="container">
                        <div className="logo-container">
                            <img src={profilePic} alt="Deekshith N" className="profile-pic" />
                        </div>
                        <div className="nav-links desktop">
                            <Link to="hero" smooth={true} duration={500} activeClass="active" spy={true} offset={-70}>About Me</Link>
                            <Link to="projects" smooth={true} duration={500} activeClass="active" spy={true} offset={-70}>Projects</Link>
                            <Link to="education" smooth={true} duration={500} activeClass="active" spy={true} offset={-70}>Academic Journey</Link>
                            <Link to="skills" smooth={true} duration={500} activeClass="active" spy={true} offset={-70}>Skills</Link>
                            <Link to="certifications" smooth={true} duration={500} activeClass="active" spy={true} offset={-70}>Certifications</Link>
                            <Link to="contact" smooth={true} duration={500} activeClass="active" spy={true} offset={-70}>Contact Me</Link>
                        </div>
                        <button
                            className="menu-toggle"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </nav>
            </header>
            <div className={`sidebar-overlay ${isMenuOpen ? 'show' : ''}`}>
                <button
                    className="close-btn"
                    onClick={closeMenu}
                    aria-label="Close menu"
                >
                    <FaTimes />
                </button>
                <Link onClick={closeMenu} to="hero" smooth={true} duration={500} offset={-70}>About Me</Link>
                <Link onClick={closeMenu} to="projects" smooth={true} duration={500} offset={-70}>Projects</Link>
                <Link onClick={closeMenu} to="education" smooth={true} duration={500} offset={-70}>Academic Journey</Link>
                <Link onClick={closeMenu} to="skills" smooth={true} duration={500} offset={-70}>Skills</Link>
                <Link onClick={closeMenu} to="certifications" smooth={true} duration={500} offset={-70}>Certifications</Link>
                <Link onClick={closeMenu} to="contact" smooth={true} duration={500} offset={-70}>Contact Me</Link>
            </div>
        </>
    );
}

export default Header;