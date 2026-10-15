import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator
      const sections = ['home', 'about', 'treatments', 'doctor', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            {/* Clinic Brand Logo */}
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="clinic-brand">
              <img 
                src="/assets/logo_mark.png" 
                alt="Gita Aspirations Pvt Ltd Emblem" 
                className="clinic-logo-icon"
              />
              <div className="clinic-logo-text">
                <span className="clinic-logo-title">
                  Gita Aspirations <span className="clinic-logo-pvt">Pvt Ltd</span>
                </span>
                <span className="clinic-logo-subtitle">
                  Facial and Dental Speciality Clinic
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="header-nav">
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              >
                About
              </a>
              <a 
                href="#treatments" 
                className={`nav-link ${activeSection === 'treatments' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('treatments'); }}
              >
                Treatments
              </a>
              <a 
                href="#doctor" 
                className={`nav-link ${activeSection === 'doctor' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('doctor'); }}
              >
                Our Doctor
              </a>
              <a 
                href="#reviews" 
                className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('reviews'); }}
              >
                Reviews
              </a>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              >
                Contact
              </a>
            </nav>

            {/* Action CTA Button */}
            <div className="header-action">
              <button 
                onClick={() => handleNavClick('contact')} 
                className="btn btn-primary header-btn"
              >
                Book an Appointment
                <Calendar size={16} />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <a 
              href="#home" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            >
              About
            </a>
            <a 
              href="#treatments" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('treatments'); }}
            >
              Treatments
            </a>
            <a 
              href="#doctor" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('doctor'); }}
            >
              Our Doctor
            </a>
            <a 
              href="#reviews" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('reviews'); }}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              Contact
            </a>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="btn btn-primary"
            >
              Book an Appointment <Calendar size={16} />
            </button>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="mobile-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true" 
        />
      )}
    </>
  );
}
