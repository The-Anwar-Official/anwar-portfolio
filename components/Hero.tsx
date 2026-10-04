export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">BACKEND-FOCUSED DEVELOPER</p>

        <h1>
          Hi, I'm <span>Anwar</span>
        </h1>

        <h2>
          I build reliable web applications and backend systems.
        </h2>

        <p className="hero-description">
          I'm a BCA student and backend-focused full-stack developer
          working with Java, MySQL, APIs, JavaScript, and modern web
          technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>

          <a
            href="https://github.com/The-Anwar-Official"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/the-kingly-an-2a0908440"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>

          <a
            href="/Anwar-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}