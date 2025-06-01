import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WavelengthBlog from './components/Blog/WavelengthBlog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/blog">Wavelength</Link>
        </nav>

        <Routes>
          <Route path="/blog" element={<WavelengthBlog />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

