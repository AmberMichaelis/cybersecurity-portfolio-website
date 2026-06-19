import './App.css'

function App() {
  return (
    <main className="site">
      <nav className="navbar">
        <h1>Amber Michaelis</h1>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">Cybersecurity Portfolio</p>
        <h2>Cybersecurity & Software Developer</h2>
        <p>
          I build security automation tools, blue-team utilities, and software projects
          that demonstrate practical programming, analysis, and problem-solving skills.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact" className="secondary">Contact Me</a>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Featured Cybersecurity Projects</h2>

        <div className="project-grid">
          <article className="project-card">
            <h3>Security Automation Toolkit</h3>
            <p>
              A collection of Python tools for common SOC, DFIR, and security analysis tasks.
            </p>
            <ul>
              <li>Hash file calculator</li>
              <li>Log keyword scanner</li>
              <li>IP address extractor</li>
              <li>IOC parser</li>
              <li>Basic URL analyzer</li>
            </ul>
          </article>

          <article className="project-card">
            <h3>Data Mining Projects</h3>
            <p>
              Projects focused on extracting, cleaning, and analyzing data to identify
              patterns and useful insights.
            </p>
          </article>

          <article className="project-card">
            <h3>File Compressor</h3>
            <p>
              A compression project demonstrating algorithms, file handling, and
              efficient data representation.
            </p>
          </article>
        </div>
      </section>

      <section id="resume" className="section">
        <h2>Education & Certifications</h2>
        <p>BS Chemical Engineering</p>
        <p>BS Computer Science</p>
        <p>CompTIA Security+</p>
        <p>Google Cybersecurity Certificate</p>
        <p>Georgia Tech OMS Cybersecurity — starting August 2026</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          GitHub, LinkedIn, resume PDF, and email links will go here.
        </p>
      </section>
    </main>
  )
}

export default App
