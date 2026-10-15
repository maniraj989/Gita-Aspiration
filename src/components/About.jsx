import React from 'react';
import { ArrowRight, UserCheck, Cpu, HeartPulse } from 'lucide-react';

export default function About({ onLearnMore }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left: Clinic Interior Photography */}
          <div className="about-visual">
            <div className="about-img-frame">
              <img 
                src="/assets/clinic_interior.jpg" 
                alt="Gita Aspirations modern clinic reception and lobby in Janakpur" 
                className="about-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Editorial Content */}
          <div className="about-content">
            <span className="section-tag">About Us</span>
            
            <h2 className="about-heading">
              Care that sees the whole you.
            </h2>

            <p className="about-desc">
              From beautiful smiles to facial scars, signs of aging, unwanted facial hair and uneven eyebrows, we understand that each individual is unique. We offer personalised treatments designed around your needs for the most effective results.
            </p>

            <div className="about-features-list">
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h4 className="about-feature-title">Patient-Centred Approach</h4>
                  <p className="about-feature-subtitle">Your comfort and satisfaction is our priority.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="about-feature-title">Modern Equipment</h4>
                  <p className="about-feature-subtitle">Safe, advanced and effective treatments.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <HeartPulse size={20} />
                </div>
                <div>
                  <h4 className="about-feature-title">Holistic Care</h4>
                  <p className="about-feature-subtitle">Dental, facial and skin care under one roof.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={onLearnMore} 
              className="btn btn-primary"
            >
              Learn More About Us
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
