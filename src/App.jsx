import React from 'react'

function App() {
  return (
    <div>
      <header className="hero">
        <div className="container">
          <h1>Welcome to My Developer Portfolio</h1>
          <p>Building modern web experiences with cutting-edge technology</p>
        </div>
      </header>
      
      <main className="container">
        <div className="grid">
          <div className="card">
            <h2>Web Development</h2>
            <p>Creating responsive and dynamic web applications using modern frameworks and technologies.</p>
          </div>
          <div className="card">
            <h2>UI/UX Design</h2>
            <p>Designing intuitive and beautiful user interfaces that provide exceptional user experiences.</p>
          </div>
          <div className="card">
            <h2>Backend Development</h2>
            <p>Building robust and scalable server-side applications and APIs.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Developer Portfolio. Support me on <a href="https://www.buymeacoffee.com/happyvibess" target="_blank" rel="noopener noreferrer">Buy Me A Coffee</a></p>
      </footer>
    </div>
  )
}

export default App

