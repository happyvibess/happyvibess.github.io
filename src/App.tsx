import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WavelengthBlog from './components/Blog/WavelengthBlog';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav-menu glass-nav">
          <div className="nav-brand">
            <Link to="/">Portfolio</Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/blog">Wavelength</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<WavelengthBlog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
