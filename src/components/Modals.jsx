import React from 'react';
import { X, Check, Award, GraduationCap, Clock, Stethoscope, ShieldCheck } from 'lucide-react';

export function DoctorModal({ isOpen, onClose, onBookAppointment }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Dr. Saurav Karna</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600 }}>
              Consultant Oral and Maxillofacial Surgeon
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '20px' }}>
            <img 
              src="/assets/doctor_reference_crop.jpg" 
              alt="Dr. Saurav Karna" 
              style={{ width: '130px', height: '140px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }}
            />
            <div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '12px' }}>
                Dr. Saurav Karna provides specialised care for a wide range of oral, facial and jaw conditions. With a patient-centred approach, he focuses on delivering safe, effective and personalised treatments to help you achieve better health, function and confidence.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '0.875rem', fontWeight: 600 }}>
                <Stethoscope size={16} />
                <span>Specialized in Oral, Facial &amp; Reconstructive Surgery</span>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--color-teal-border)', paddingTop: '16px', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-text-heading)', marginBottom: '10px' }}>Clinical Practice Focus:</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="var(--color-primary)" />
                Oral &amp; Maxillofacial surgical procedures
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="var(--color-primary)" />
                Facial aesthetic care, scar management &amp; anti-aging solutions
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="var(--color-primary)" />
                Smile correction, clear aligners &amp; dental rehabilitation
              </li>
            </ul>
          </div>

          <button 
            onClick={() => {
              onClose();
              onBookAppointment();
            }} 
            className="btn btn-primary" 
            style={{ width: '100%' }}
          >
            Consult with Dr. Saurav Karna
          </button>
        </div>
      </div>
    </div>
  );
}

export function TreatmentModal({ treatment, onClose, onBookAppointment }) {
  if (!treatment) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{treatment.title}</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <img 
            src={treatment.img} 
            alt={treatment.title} 
            style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px', marginBottom: '18px' }}
          />

          <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '20px' }}>
            {treatment.desc}
          </p>

          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
            At Gita Aspirations, each procedure is tailored precisely to your facial anatomy and personal aesthetic goals using state-of-the-art clinical equipment and safety standards.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => {
                onClose();
                onBookAppointment(treatment.category);
              }} 
              className="btn btn-primary" 
              style={{ flex: 1 }}
            >
              Book this Treatment
            </button>
            <button onClick={onClose} className="btn btn-secondary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutModal({ isOpen, onClose, onBookAppointment }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">About Gita Aspirations Pvt Ltd</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <img 
            src="/assets/clinic_interior.jpg" 
            alt="Clinic Interior" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '18px' }}
          />

          <h4 style={{ fontSize: '1.1rem', color: 'var(--color-text-heading)', marginBottom: '8px' }}>
            Facial &amp; Dental Speciality Clinic in Janakpur
          </h4>

          <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
            From beautiful smiles to facial scars, signs of aging, unwanted facial hair and uneven eyebrows, we understand that each individual is unique. We offer personalised treatments designed around your needs for the most effective results.
          </p>

          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
            Located conveniently in Devichowk 10, Janakpur, Nepal, our facility combines modern medical hygiene, comfortable ambiance, and specialist doctors to deliver outstanding clinical outcomes.
          </p>

          <button 
            onClick={() => {
              onClose();
              onBookAppointment();
            }} 
            className="btn btn-primary" 
            style={{ width: '100%' }}
          >
            Schedule a Visit
          </button>
        </div>
      </div>
    </div>
  );
}
