export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <p className="section-label">CONTACT</p>

        <h2>Let's build something useful.</h2>

        <p className="contact-text">
          I'm open to discussing projects, development opportunities,
          internships, and ideas related to software development.
        </p>

        <div className="contact-links">
          <a
            href="mailto:mr.an.rough@gmail.com"
            className="contact-link"
          >
            Email Me →
          </a>

          <a
            href="https://github.com/The-Anwar-Official"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub →
          </a>

          <a
            href="https://www.linkedin.com/in/the-kingly-an-2a0908440"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}