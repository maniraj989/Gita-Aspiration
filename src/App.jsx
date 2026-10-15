import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Treatments from './components/Treatments';
import About from './components/About';
import Doctor from './components/Doctor';
import Reviews from './components/Reviews';
import AppointmentLocation from './components/AppointmentLocation';
import Footer from './components/Footer';
import DeveloperCreditStrip from './components/DeveloperCreditStrip';
import { DoctorModal, TreatmentModal, AboutModal } from './components/Modals';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [doctorModalOpen, setDoctorModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const scrollToContact = (serviceName = '') => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTreatments = () => {
    const treatmentsSection = document.getElementById('treatments');
    if (treatmentsSection) {
      treatmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTreatment = (treatment) => {
    setSelectedTreatment(treatment);
  };

  return (
    <div className="site-wrapper">
      {/* 1. Header & Sticky Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero 
          onBookClick={() => scrollToContact()} 
          onExploreClick={scrollToTreatments}
        />

        {/* 3. Treatments Section */}
        <Treatments 
          onSelectTreatment={handleSelectTreatment} 
        />

        {/* 4. About the Clinic Section */}
        <About 
          onLearnMore={() => setAboutModalOpen(true)} 
        />

        {/* 5. Doctor Profile Section */}
        <Doctor 
          onViewProfile={() => setDoctorModalOpen(true)} 
        />

        {/* 6. Patient Reviews & Google Testimonials */}
        <Reviews />

        {/* 7. Appointment Booking & Location Section */}
        <AppointmentLocation 
          selectedService={selectedService} 
        />
      </main>

      {/* 8. Footer Section */}
      <Footer 
        onNavClick={handleNavClick} 
      />

      {/* 9. Developer Credit Strip (Mandatory Requirement 11 - Final Visible Element) */}
      <DeveloperCreditStrip />

      {/* Modals for enhanced interactivity */}
      <DoctorModal 
        isOpen={doctorModalOpen} 
        onClose={() => setDoctorModalOpen(false)}
        onBookAppointment={() => scrollToContact('Oral & Maxillofacial Surgery')}
      />

      <AboutModal 
        isOpen={aboutModalOpen} 
        onClose={() => setAboutModalOpen(false)}
        onBookAppointment={() => scrollToContact()}
      />

      <TreatmentModal 
        treatment={selectedTreatment} 
        onClose={() => setSelectedTreatment(null)}
        onBookAppointment={(category) => scrollToContact(category)}
      />
    </div>
  );
}
