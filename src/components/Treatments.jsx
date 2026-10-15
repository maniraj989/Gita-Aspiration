import React from 'react';
import { ArrowRight } from 'lucide-react';

export const treatmentData = [
  {
    id: 'dental-care',
    title: 'Dental Care & Smile Design',
    desc: 'General and cosmetic dental treatments for a healthier, brighter smile.',
    img: '/assets/treatment_dental_care.jpg',
    category: 'Dental Care & Smile Design'
  },
  {
    id: 'clear-aligners',
    title: 'Clear Aligners',
    desc: 'Straighten your teeth with clear, comfortable aligners.',
    img: '/assets/treatment_clear_aligners.jpg',
    category: 'Clear Aligners'
  },
  {
    id: 'oral-surgery',
    title: 'Oral & Maxillofacial Surgery',
    desc: 'Expert care for oral, facial and jaw conditions.',
    img: '/assets/treatment_oral_surgery.jpg',
    category: 'Oral & Maxillofacial Surgery'
  },
  {
    id: 'facial-aesthetic',
    title: 'Facial Aesthetic Care',
    desc: 'Solutions for signs of aging, facial scars and overall facial enhancement.',
    img: '/assets/treatment_facial_aesthetic.jpg',
    category: 'Facial Aesthetic Care'
  },
  {
    id: 'chemical-peeling',
    title: 'Chemical Peeling',
    desc: 'Rejuvenate your skin for a fresher, brighter look.',
    img: '/assets/treatment_chemical_peeling.jpg',
    category: 'Chemical Peeling'
  },
  {
    id: 'laser-hair',
    title: 'Laser Hair Reduction & Skin Care',
    desc: 'Safe and effective solutions for unwanted facial hair and skin concerns.',
    img: '/assets/treatment_laser_hair.jpg',
    category: 'Laser Hair Reduction & Skin Care'
  }
];

export default function Treatments({ onSelectTreatment }) {
  return (
    <section id="treatments" className="treatments-section">
      <div className="container">
        {/* Section Header */}
        <div className="treatments-header">
          <span className="section-tag">Our Treatments</span>
          <h2 className="section-heading">
            Comprehensive Facial &amp; Dental Care Under One Roof
          </h2>
          <p className="section-subtitle">
            Expert care for your smile, face and overall well-being.
          </p>
        </div>

        {/* 6 Treatment Cards Grid */}
        <div className="treatments-grid">
          {treatmentData.map((item) => (
            <div 
              key={item.id} 
              className="treatment-card"
              onClick={() => onSelectTreatment(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectTreatment(item);
                }
              }}
            >
              <div className="treatment-card-img-wrapper">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="treatment-card-img" 
                  loading="lazy"
                />
              </div>

              <div className="treatment-card-body">
                <h3 className="treatment-card-title">{item.title}</h3>
                <p className="treatment-card-desc">{item.desc}</p>
                
                <div className="treatment-card-arrow" aria-label={`Learn more about ${item.title}`}>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
