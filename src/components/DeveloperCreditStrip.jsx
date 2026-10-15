import React from 'react';

export default function DeveloperCreditStrip() {
  return (
    <div className="developer-credit-strip">
      <div className="container">
        <div className="credit-strip-inner">
          <div className="credit-strip-left">
            &copy; 2026 Gita Aspirations Pvt Ltd. All rights reserved.
          </div>
          <div className="credit-strip-right">
            Developed by{' '}
            <a 
              href="https://mmdigitalgarage.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="credit-link"
              aria-label="Visit MM Digital Garage official website"
            >
              MM Digital Garage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
