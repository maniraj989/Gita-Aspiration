import React from 'react';
import { ArrowRight, ShieldCheck, Users, Sparkles } from 'lucide-react';

export default function Hero({ onBookClick, onExploreClick }) {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <span className="hero-eyebrow">
              Facial &amp; Dental Speciality Clinic
            </span>
            
            <h1 className="hero-title">
              <span>Because</span>
              <span>Every Face</span>
              <span className="title-unique">is Unique</span>
            </h1>

            <p className="hero-description">
              From beautiful smiles to omitting facial scars, to signs of aging and from bothering facial hairs to uneven eyebrows. We understand that each individual is unique, which is why we offer personalized treatments designed for most effective results.
            </p>

            <div className="hero-cta-group">
              <button 
                onClick={onBookClick} 
                className="btn btn-primary"
              >
                Book an Appointment
                <ArrowRight size={17} />
              </button>
              <button 
                onClick={onExploreClick} 
                className="btn btn-secondary"
              >
                Explore Treatments
              </button>
            </div>

            {/* 3 Key Supporting Benefits */}
            <div className="hero-benefits-row">
              <div className="hero-benefit-item">
                <div className="hero-benefit-icon">
                  <Sparkles size={17} />
                </div>
                <span className="hero-benefit-text">
                  Personalised Treatment Plans
                </span>
              </div>

              <div className="hero-benefit-item">
                <div className="hero-benefit-icon">
                  <ShieldCheck size={18} />
                </div>
                <span className="hero-benefit-text">
                  Modern &amp; Safe Clinical Care
                </span>
              </div>

              <div className="hero-benefit-item">
                <div className="hero-benefit-icon">
                  <Users size={18} />
                </div>
                <span className="hero-benefit-text">
                  Expert Team You Can Trust
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Composition */}
          <div className="hero-visual-wrapper">
            <div className="hero-visual-container">
              <img 
                src="/assets/hero_woman_composition.png" 
                alt="Radiant smiling woman receiving facial and dental aesthetic care at Gita Aspirations" 
                className="hero-main-img"
              />
              
              {/* Floating Hand-lettered Script Badge */}
              <div className="hero-floating-badge">
                <span className="script-line-1">Confident Smiles</span>
                <span className="script-line-2">Healthier You</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
