import React from 'react';
import VideoSection from './VideoSection';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Find Your Dream Home</h2>
          <p>
            Discover the perfect property that matches your lifestyle and preferences. 
            Our curated selection of premium real estate offers exceptional value 
            and quality in the most desirable locations.
          </p>
          <p>
            Whether you're looking for a cozy family home, a modern urban apartment, 
            or a luxurious estate, our expert agents are ready to help you find 
            the perfect match.
          </p>
          <button className="cta-button">Browse Properties</button>
        </div>
        <div className="hero-video">
          <VideoSection />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;