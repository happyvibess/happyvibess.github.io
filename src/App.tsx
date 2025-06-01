import React, { useEffect } from 'react';
import './App.css';

function App() {
  // Debug logging
  useEffect(() => {
    console.log('App component mounted');
    console.log('Navigation styles loaded');
  }, []);

  // Navigation handlers
  const handleHomeClick = () => {
    console.log('Home button clicked');
    // For now, just reload the current page
    window.location.href = './';
  };

  const handleWavelengthClick = () => {
    console.log('Wavelength button clicked');
    // For now, just log the click
    console.log('Navigating to Wavelength section...');
  };

  return (
    <div className="app">
      <nav className="top-nav">
        <div className="nav-container">
          <h1 className="nav-title">Portfolio</h1>
          <div className="nav-buttons">
            <button 
              className="nav-button"
              onClick={handleHomeClick}
              aria-label="Home"
            >
              <span className="link-text">Home</span>
            </button>
            <button 
              className="nav-button nav-button-featured"
              onClick={handleWavelengthClick}
              aria-label="Wavelength Blog"
            >
              <span className="link-text">Wavelength</span>
              <span className="sparkle link-icon" role="img" aria-label="sparkle">✨</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Exploring the intersection of technology and creativity.</p>
        <div className="debug-info" style={{ marginTop: '20px', fontSize: '0.8em', opacity: 0.7 }}>
          <p>Navigation Status: Active</p>
          <p>Current Route: Home</p>
        </div>
      </main>
    </div>
  );
}

export default App;
