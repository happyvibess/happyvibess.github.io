import React from 'react';
import './Home.css';
import MonetizationSection from '../MonetizationSection/MonetizationSection';

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Full-Stack Developer & Tech Enthusiast</p>
        </div>
      </header>

      <section className="featured-section">
        <div className="container">
          <h2>Featured Content</h2>
          <div className="featured-grid">
            <div className="featured-card">
              <div className="card-content">
                <h3>Services & Products</h3>
                <p>Check out my digital products and services</p>
                <span className="cta-link">Explore →</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <MonetizationSection />
    </div>
  );
};

export default Home;
