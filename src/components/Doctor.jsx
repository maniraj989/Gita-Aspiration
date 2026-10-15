import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Doctor({ onViewProfile }) {
  return (
    <section id="doctor" className="doctor-section">
      <div className="container">
        <div className="doctor-grid">
          {/* Left: Doctor Information */}
          <div className="doctor-content">
            <span className="section-tag">Our Doctor</span>
            
            <h2 className="doctor-name">
              Dr. Saurav Karna
            </h2>
            
            <p className="doctor-designation">
              Consultant Oral and Maxillofacial Surgeon
            </p>

            <p className="doctor-bio">
              Dr. Saurav Karna provides specialised care for a wide range of oral, facial and jaw conditions. With a patient-centred approach, he focuses on delivering safe, effective and personalised treatments to help you achieve better health, function and confidence.
            </p>

            {/* Doctor's Signature Graphic */}
            <div className="doctor-signature-wrap">
              <img 
                src="/assets/doctor_signature.png" 
                alt="Signature of Dr. Saurav Karna" 
                className="doctor-signature-img"
              />
            </div>

            <button 
              onClick={onViewProfile} 
              className="btn btn-primary"
            >
              View Doctor Profile
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Right: Authentic Photograph with Curved Teal Backdrop */}
          <div className="doctor-visual">
            <div className="doctor-img-container">
              <img 
                src="/assets/doctor_reference_crop.jpg" 
                alt="Dr. Saurav Karna, Consultant Oral and Maxillofacial Surgeon wearing teal medical scrubs and glasses" 
                className="doctor-photo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
