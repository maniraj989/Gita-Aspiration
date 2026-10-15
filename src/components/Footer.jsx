import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function Footer({ onNavClick }) {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer 4 Columns Grid */}
        <div className="footer-grid">
          {/* Column 1: Clinic Brand & Mission */}
          <div className="footer-col-brand">
            <div className="footer-logo">
              <img 
                src="/assets/logo_mark.png" 
                alt="Gita Aspirations Pvt Ltd" 
                className="footer-logo-icon"
              />
              <div>
                <h3 className="footer-logo-title">Gita Aspirations Pvt Ltd</h3>
                <p className="footer-logo-subtitle">Facial and Dental Speciality Clinic</p>
              </div>
            </div>
            
            <p className="footer-description">
              A trusted destination for comprehensive facial and dental care. We are committed to healthier smiles, brighter faces and greater confidence for every individual.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavClick('home'); }} className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); onNavClick('about'); }} className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#treatments" onClick={(e) => { e.preventDefault(); onNavClick('treatments'); }} className="footer-link">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#doctor" onClick={(e) => { e.preventDefault(); onNavClick('doctor'); }} className="footer-link">
                  Our Doctor
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => { e.preventDefault(); onNavClick('reviews'); }} className="footer-link">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavClick('contact'); }} className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="footer-col-title">Contact Info</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={17} className="footer-contact-icon" />
                <span>Devichowk 10, Janakpur, Nepal</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={17} className="footer-contact-icon" />
                <a href="tel:+9779803836656" className="footer-link">+977 980-3836656</a>
              </li>
              <li className="footer-contact-item">
                <Mail size={17} className="footer-contact-icon" />
                <a href="mailto:gfdscjanakpur@gmail.com" className="footer-link">gfdscjanakpur@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="footer-col-title">Follow Us</h4>
            <div className="footer-social-links">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="Facebook Page"
              >
                <FacebookIcon size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-inner">
          <div>
            &copy; 2026 Gita Aspirations Pvt Ltd. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span>|</span>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
