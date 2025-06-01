import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

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
            <Link to="/blog" className="featured-card" onClick={() => window.scrollTo(0, 0)}>
              <div className="card-content">
                <h3>Wavelength Blog</h3>
                <p>Explore technical insights and development stories</p>
                <span className="cta-link">Read More →</span>
              </div>
            </Link>
            {/* Add more featured cards as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

