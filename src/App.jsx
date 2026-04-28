import React from 'react';
import logo from './assets/LogoFinal.png';
import './App.css';

function App() {
  return (
      <div className="app-wrapper">
        <header className="container">
          <nav className="navbar">
            <div className="logo-container">
              <img src={logo} alt="IN FOKUS" className="logo" />
            </div>
            <div className="nav-links">
              <a href="#work">Work</a>
              <a href="#contact" className="nav-btn">Contact</a>
            </div>
          </nav>
        </header>

        <main className="container">
          <section className="hero">
            <h1 className="hero-title">
              IN FOKUS. <br />
              <span className="subtitle">STATEMENT.</span>
            </h1>
            <p className="hero-description">
              Minimalistisches Design & Strategie für 2026.
            </p>
          </section>

          <section id="work" className="project-grid">
            {/* Hier können wir später Komponenten einfügen */}
            <div className="project-card">
              <div className="card-placeholder"></div>
              <h3>Coming Soon</h3>
            </div>
          </section>

          <section className="projects">
            <div className="project-card">
              <h2>Projekt Titel</h2>
              <p>Hier steht die Beschreibung.</p>
            </div>
          </section>

        </main>
      </div>
  );
}

export default App;