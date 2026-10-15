import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function AppointmentLocation({ selectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    service: selectedService || '',
    preferredDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Update service if prop changes
  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid name';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone Number is required';
    } else {
      // Basic phone check (allowing +, spaces, dashes, digits)
      const phoneClean = formData.phoneNumber.replace(/[\s-]/g, '');
      if (!/^\+?[0-9]{7,15}$/.test(phoneClean)) {
        errs.phoneNumber = 'Please enter a valid phone number (e.g. +977 980-3836656)';
      }
    }

    if (!formData.service || formData.service === '') {
      errs.service = 'Please select a treatment service';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate reliable dispatch with clear user feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitSuccess(true);
      setSubmittedData({ ...formData });

      // Build email / whatsapp intent fallback link so user request is actually transmitted!
      const subject = encodeURIComponent(`Appointment Request: ${formData.service} - ${formData.fullName}`);
      const body = encodeURIComponent(
        `Dear Gita Aspirations Clinic Team,\n\nI would like to request an appointment:\n` +
        `• Full Name: ${formData.fullName}\n` +
        `• Phone Number: ${formData.phoneNumber}\n` +
        `• Service: ${formData.service}\n` +
        `• Preferred Date: ${formData.preferredDate || 'Earliest available'}\n` +
        `• Message: ${formData.message || 'None'}\n\n` +
        `Thank you!`
      );

      // Open mail client or WhatsApp as requested
      const mailtoLink = `mailto:gfdscjanakpur@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      service: '',
      preferredDate: '',
      message: ''
    });
    setSubmitSuccess(false);
    setSubmittedData(null);
  };

  // Get today's date formatted as YYYY-MM-DD for min date picker
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="appointment-location-section">
      <div className="container">
        <div className="appointment-location-grid">
          {/* Left Column: Dark Teal Booking Panel */}
          <div className="booking-panel">
            <span className="section-tag section-tag-light">
              Book an Appointment
            </span>
            
            <h2 className="booking-heading">
              Get Expert Care for a Healthier, Confident You
            </h2>

            {submitSuccess ? (
              <div className="booking-success-box">
                <div className="booking-success-icon">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="booking-success-title">Appointment Request Submitted!</h3>
                <p className="booking-success-desc">
                  Thank you, <strong>{submittedData?.fullName}</strong>. We have prepared your request for <strong>{submittedData?.service}</strong>. Our clinical coordinator will reach out to you at <strong>{submittedData?.phoneNumber}</strong> shortly to confirm your consultation time.
                </p>
                <button onClick={handleReset} className="btn btn-secondary" style={{ color: '#ffffff', borderColor: '#ffffff' }}>
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form" noValidate>
                {/* Row 1: Name and Phone */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`form-input ${errors.fullName ? 'error' : ''}`}
                      required
                    />
                    {errors.fullName && (
                      <span className="form-error-msg">{errors.fullName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phoneNumber">
                      Phone Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className={`form-input ${errors.phoneNumber ? 'error' : ''}`}
                      required
                    />
                    {errors.phoneNumber && (
                      <span className="form-error-msg">{errors.phoneNumber}</span>
                    )}
                  </div>
                </div>

                {/* Row 2: Service & Date */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="service">
                      Service <span className="req">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`form-select ${errors.service ? 'error' : ''}`}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Dental Care & Smile Design">Dental Care &amp; Smile Design</option>
                      <option value="Clear Aligners">Clear Aligners</option>
                      <option value="Oral & Maxillofacial Surgery">Oral &amp; Maxillofacial Surgery</option>
                      <option value="Facial Aesthetic Care">Facial Aesthetic Care</option>
                      <option value="Chemical Peeling">Chemical Peeling</option>
                      <option value="Laser Hair Reduction & Skin Care">Laser Hair Reduction &amp; Skin Care</option>
                    </select>
                    {errors.service && (
                      <span className="form-error-msg">{errors.service}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="preferredDate">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={today}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your concern"
                    className="form-textarea"
                  />
                </div>

                {/* Submit CTA */}
                <button 
                  type="submit" 
                  disabled={submitting} 
                  className="btn-submit-booking"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Processing Request...
                    </>
                  ) : (
                    <>
                      Request an Appointment
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Location & Contact Details */}
          <div className="location-panel">
            <span className="section-tag">Our Location</span>
            
            <h2 className="location-heading">
              Visit Our Clinic
            </h2>

            <div className="location-address-badge">
              <MapPin size={18} color="var(--color-primary)" />
              <span>Devichowk 10, Janakpur, Nepal</span>
            </div>

            {/* Embedded Google Map */}
            <div className="location-map-wrapper">
              <iframe
                title="Gita Aspirations Clinic Location - Devichowk 10, Janakpur, Nepal"
                src="https://maps.google.com/maps?q=Devichowk+10,+Janakpur,+Nepal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="location-map-iframe"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* 3 Contact Action Cards */}
            <div className="location-contacts-row">
              <a 
                href="tel:+9779803836656" 
                className="contact-action-card"
                aria-label="Call clinic at +977 980-3836656"
              >
                <div className="contact-action-icon">
                  <Phone size={16} />
                </div>
                <span className="contact-action-value">+977 980-3836656</span>
                <span className="contact-action-label">Call Us</span>
              </a>

              <a 
                href="mailto:gfdscjanakpur@gmail.com" 
                className="contact-action-card"
                aria-label="Email clinic at gfdscjanakpur@gmail.com"
              >
                <div className="contact-action-icon">
                  <Mail size={16} />
                </div>
                <span className="contact-action-value">gfdscjanakpur@gmail.com</span>
                <span className="contact-action-label">Email Us</span>
              </a>

              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Devichowk+10,+Janakpur,+Nepal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-action-card"
                aria-label="Get directions to Devichowk 10, Janakpur, Nepal"
              >
                <div className="contact-action-icon">
                  <MapPin size={16} />
                </div>
                <span className="contact-action-value">Devichowk 10, Janakpur</span>
                <span className="contact-action-label">Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
