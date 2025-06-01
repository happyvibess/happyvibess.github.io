import React from 'react';
import './MonetizationSection.css';

const MonetizationSection: React.FC = () => {
  return (
    <section className="monetization-section">
      {/* Digital Products */}
      <div className="section-container products-section">
        <h2>Digital Products</h2>
        <div className="products-grid">
          <div className="product-card glass-card">
            <span className="price-tag">$49</span>
            <h3>React Component Library</h3>
            <p>Modern, customizable React components with TypeScript support</p>
            <a href="#" className="cta-button">View Details</a>
          </div>
          <div className="product-card glass-card">
            <span className="price-tag">$29</span>
            <h3>Portfolio Template</h3>
            <p>Professional developer portfolio template with dark/light modes</p>
            <a href="#" className="cta-button">View Details</a>
          </div>
        </div>
      </div>

      {/* Affiliate Partnerships */}
      <div className="section-container affiliates-section">
        <h2>Recommended Tools</h2>
        <div className="affiliates-grid">
          <div className="affiliate-card glass-card">
            <img src="https://via.placeholder.com/50" alt="DigitalOcean" />
            <h3>DigitalOcean</h3>
            <p>Get $100 in cloud credits</p>
            <a href="https://digitalocean.com" className="cta-button" target="_blank" rel="noopener noreferrer">
              Claim Offer
            </a>
          </div>
          <div className="affiliate-card glass-card">
            <img src="https://via.placeholder.com/50" alt="Frontend Masters" />
            <h3>Frontend Masters</h3>
            <p>1 Month Free Access</p>
            <a href="https://frontendmasters.com" className="cta-button" target="_blank" rel="noopener noreferrer">
              Start Learning
            </a>
          </div>
        </div>
      </div>

      {/* Sponsored Content */}
      <div className="section-container sponsored-section">
        <h2>Featured Content</h2>
        <div className="sponsored-grid">
          <article className="sponsored-card glass-card">
            <span className="sponsored-tag">Sponsored</span>
            <h3>Build Modern Web Apps</h3>
            <p>Learn how to create scalable web applications using the latest technologies</p>
            <div className="sponsor-info">
              <img src="https://via.placeholder.com/30" alt="Sponsor" />
              <span>By TechCorp</span>
            </div>
          </article>
        </div>
      </div>

      {/* Advertisement Space */}
      <div className="section-container ads-section">
        <div className="ad-space glass-card">
          <span className="ad-label">Advertisement</span>
          <div className="ad-content">
            <h3>Your Ad Here</h3>
            <p>Reach thousands of developers</p>
            <a href="mailto:contact@example.com" className="cta-button">Advertise with Us</a>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="support-section">
        <h2>Support My Work</h2>
        <div className="support-options">
          <a href="https://www.buymeacoffee.com/happyvibess" 
             className="coffee-button" 
             target="_blank" 
             rel="noopener noreferrer">
            ☕ Buy me a coffee
          </a>
        </div>
      </div>
    </section>
  );
};

export default MonetizationSection;

