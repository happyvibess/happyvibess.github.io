import React from 'react';
import './App.css';

function App() {
  console.log('App component rendered'); // Debug log

  return (
    <div className="app">
      <nav className="top-nav">
        <div className="nav-container">
          <h1 className="nav-title">Portfolio</h1>
          <div className="nav-buttons">
            <button className="nav-button">Home</button>
            <button className="nav-button nav-button-featured">
              <span>Wavelength</span>
              <span className="sparkle">✨</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a test page to verify navigation visibility.</p>
      </main>
    </div>
  );
}

export default App;
