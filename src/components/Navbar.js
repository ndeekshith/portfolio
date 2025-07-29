import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  console.log("Navbar component rendered!"); // For debugging
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Toggle sidebar clicked. New state:", !isSidebarOpen); // For debugging
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    console.log("Close sidebar clicked. New state: false"); // For debugging
  };

  return (
    <>
      <nav>
        <div className="container">
          <a href="/" className="logo">Deekshith N</a>

          {/* Desktop navigation links are now effectively hidden by CSS */}
          <div className="nav-links desktop">
            <Link to="Education" smooth={true} duration={500}>Education</Link>
            <Link to="Projects" smooth={true} duration={500}>Projects</Link>
            <Link to="Skills" smooth={true} duration={500}>Skills</Link>
            <Link to="Certifications" smooth={true} duration={500}>Certifications</Link>
            <Link to="Contact me" smooth={true} duration={500}>Contact me</Link>
          </div>

          {/* Mobile menu toggle button is now visible on all devices */}
          <button className="menu-toggle mobile" onClick={toggleSidebar}>☰</button>
        </div>
      </nav>

      {/* Sidebar overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'show' : ''}`}>
        <button className="close-btn" onClick={closeSidebar}>×</button>
        <Link onClick={closeSidebar} to="Education" smooth={true} duration={500}>Education</Link>
        <Link onClick={closeSidebar} to="Projects" smooth={true} duration={500}>Projects</Link>
        <Link onClick={closeSidebar} to="Skills" smooth={true} duration={500}>Skills</Link>
        <Link onClick={closeSidebar} to="Certifications" smooth={true} duration={500}>Certifications</Link>
        <Link onClick={closeSidebar} to="Contact me" smooth={true} duration={500}>Contact me</Link>
      </div>
    </>
  );
}

export default Navbar;