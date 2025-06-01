import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import WavelengthBlog from './components/Blog/WavelengthBlog';
import Home from './components/Home/Home';
import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <nav className="glass-nav">
          <div className="nav-brand">
            <Link to="/">Portfolio</Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/blog" className="nav-link nav-link-featured">
              <span className="link-text">Wavelength</span>
              <span className="link-icon">✨</span>
            </Link>
          </div>
        </nav>

        <ScrollToTop />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/*" element={<WavelengthBlog />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
