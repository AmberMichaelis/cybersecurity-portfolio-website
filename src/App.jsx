/** @format */

import './App.css';

function App() {
  return (
    <main className='site'>
      <nav className='navbar'>
        <div>
          <h1>
            <a href='#hero'>Amber Michaelis</a>
          </h1>
          <p href='#hero'>contact@ambermichaelis.com</p>
        </div>
        <div className='nav-links'>
          <a href='#projects'>Projects</a>
          <a href='#skills'>Skills</a>
          <a href='#education'>Education</a>
          <a href='#certifications'>Certifications</a>
          <a href='/Amber_Michaelis_Resume.pdf' target='_blank'>
            Resume
          </a>
          <a href='#contact'>Contact</a>
        </div>
      </nav>

      <section id='hero' className='hero'>
        <p className='eyebrow'>Amber Michaelis</p>
        <h2>Cybersecurity Analyst & Software Developer</h2>
        <h3>Security Automation | Blue Team Operations</h3>
        <p>
          Building security automation tools, incident response utilities, and
          detection-focused software. Interested in threat hunting, critical
          infrastructure security, and practical cybersecurity solutions that
          help protect people and organizations.
        </p>

        <div className='hero-buttons'>
          <a href='#projects'>View Projects</a>
          <a href='/Amber_Michaelis_Resume.pdf' download className='secondary'>
            Download Resume
          </a>
          <a
            href='https://github.com/AmberMichaelis'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit GitHub
          </a>
          <div>
          <h3>CompTIA Security+</h3>
          <h3>BS Computer Science</h3>
          <h3>BS Chemical Engineering</h3>
          <h3>MS Cybersecurity</h3>
          </div>
        </div>
      </section>

      <section id='projects' className='section'>
        <h2>Featured Cybersecurity Projects</h2>

        <div className='project-grid'>
          <article className='main-project-card'>
            <h3>Security Automation Toolkit</h3>
            <p>
              A growing collection of Python-based security tools for common
              blue-team, DFIR, and analyst workflows.
            </p>
            <p>
              Current Tools Include: Hash File Calculator, Log Keyword Scanner,
              IP Address Extractor, IOC Parser, Basic URL Analyzer.
            </p>
            <div className='hero-buttons'>
              <a
                href='https://github.com/AmberMichaelis/cybersecurity/blob/main/README.md'
                target='_blank'
                rel='noopener noreferrer'
              >
                README
              </a>
            </div>
          </article>
        </div>
        <br />
        <div className='project-grid-3'>
          <article className='project-card'>
            <h3>Log Keyword Scanner</h3>
            <p>
              Scans log files for custom keywords across thousands of entries to
              identify suspicious patterns, authentication failures, and
              security-relevant activity.
            </p>
            <ul>
              <li>Python</li>
              <li>File Parsing</li>
              <li>Keyword Detection</li>
              <li>SOC Analysis</li>
            </ul>
            <div className='hero-buttons'>
              <a
                href='https://github.com/AmberMichaelis/cybersecurity/blob/main/security-automation/tools/log_keyword_scanner.py'
                target='_blank'
                rel='noopener noreferrer'
              >
                View Code
              </a>
            </div>
          </article>

          <article className='project-card'>
            <h3>IOC Parser</h3>
            <p>
              Extracts indicators of compromise such as IP addresses, domains,
              URLs, hashes, and emails from text files or security notes.
            </p>
            <ul>
              <li>Regex</li>
              <li>Threat Intelligence</li>
              <li>IOC extraction</li>
              <li>DFIR Workflows</li>
            </ul>
            <div className='hero-buttons'>
              <a
                href='https://github.com/AmberMichaelis/cybersecurity/blob/main/security-automation/tools/ioc_parser.py'
                target='_blank'
                rel='noopener noreferrer'
              >
                View Code
              </a>
            </div>
          </article>

          <article className='project-card'>
            <h3>Technical Projects</h3>
            <p>
              Additional projects demonstrating data analysis, algorithms, web
              development, and interactive programming.
            </p>
            <ul>
              <li>File Compressor</li>
              <li>Regression Classifiers</li>
              <li>Artificial Neural Network</li>
              <li>Games & Animations</li>
            </ul>
            <div className='hero-buttons'>
              <a
                href='https://www.krustykrab.us/projects'
                target='_blank'
                rel='noopener noreferrer'
              >
                View More
              </a>
            </div>
          </article>
        </div>
        <br />
        <div className='project-grid'>
          <article className='main-project-card'>
            <h3>Technical Articles</h3>
            <p>
              A growing collection of technical articles about the internet,
              operating systems, the cloud, social media algorithms, search
              engines, cybersecurity, cyber law, cyber warfare, and artificial
              intelligence..
            </p>
            <div className='hero-buttons'>
              <a
                href='https://library.michaelisuniversity.com/the-internet-and-technology/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Learn More
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id='skills' className='section'>
        <h2>Technical Skills</h2>
        <div className='skills-grid-2'>
          <article className='skills-card'>
            <h3>Security</h3>
            <ul>
              <li>Incident Response</li>
              <li>Threat Hunting</li>
              <li>Log Analysis</li>
              <li>IOC Analysis</li>
              <li>Security Automation</li>
              <li>OSINT</li>
            </ul>
          </article>
          <article className='skills-card'>
            <h3>Programming</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML/CSS</li>
              <li>Bash</li>
            </ul>
          </article>
        </div>
        <div className='skills-grid-2'>
          <article className='skills-card'>
            <h3>Data & Analysis</h3>
            <ul>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Data Mining</li>
              <li>Data Visualization</li>
              <li>Statistical Analysis</li>
              <li>Machine Learning</li>
            </ul>
          </article>
          <article className='skills-card'>
            <h3>Infrastucture</h3>
            <ul>
              <li>Linux</li>
              <li>MacOS</li>
              <li>Git/GitHub</li>
              <li>Networking</li>
              <li>DNS</li>
              <li>Virtualization</li>
            </ul>
          </article>
        </div>
      </section>

      <section id='education' className='section'>
        <h2>Education</h2>

        <div className='project-grid-3'>
          <article className='main-project-card'>
            <h3>MS Cybersecurity (In Progress) </h3>
            <p className='eyebrow'>Georgia Institute of Technology</p>
            <p>Expected Completion: 2028</p>
          </article>
        </div>
        <br />
        <div className='project-grid-3'>
          <article className='main-project-card'>
            <h3>BS Computer Science </h3>
            <p className='eyebrow'>Louisiana State University Alexandria</p>
            <ul>
              <li>GPA: 3.89 / 4.0</li>
              <li>Computer Science Club President</li>
              <li>STEM Skills Seminar Host and Presenter</li>
              <li>1st Place Virtual Scholar Day Winner</li>
            </ul>
          </article>
        </div>
        <br />
        <div className='project-grid-3'>
          <article className='main-project-card'>
            <h3>BS Chemical Engineering </h3>
            <p className='eyebrow'>McNeese State University</p>
            <ul>
              <li>GPA: 3.42 / 4.0</li>
              <li>Focus: Math, Chemistry, Biology</li>
              <li>Society of Women Engineers</li>
            </ul>
          </article>
        </div>
        <br />
      </section>

      <section id='certifications' className='section'>
        <h2>Certifications</h2>
        <article className='main-project-card'>
          <p>CompTIA Security+</p>
          <p>Google Cybersecurity</p>
          <p>Stanford Machine Learning</p>
          <p>Georgia Tech Data Structures & Algorithms</p>
          <p>Texas Teaching: 6-12 Grade Math, Science, & Engineering</p>
          <p>CompTIA Network+ (In Progress)</p>
        </article>
      </section>

      <section id='contact' className='section'>
        <h2>Contact</h2>
        <article className='main-project-card'>
          <div className='hero-buttons'>
            <a
              href='https://www.linkedin.com/in/ambermichaelis/'
              target='blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/AmberMichaelis'
              target='blank'
              rel='noopener noreferrer'
              className='secondary'
            >
              GitHub
            </a>
          </div>
          <p href='#hero'>contact@ambermichaelis.com</p>
        </article>
      </section>
      <nav className='navbar'>
        <h1>Copyright © 2026 Amber Michaelis. All rights reserved.</h1>
      </nav>
    </main>
  );
}

export default App;
