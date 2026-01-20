function Contact() {
  return (
    <section id="contact" className="contact-section">
      <span className="contact-label">WHAT’S NEXT</span>

      <h2 className="contact-title">
        Let’s build reliable software.
      </h2>

      <p className="contact-text">
        I’m open to software development roles, backend-focused work,
        and conversations around building maintainable, scalable systems.
        If my experience aligns with your needs, let’s talk.
      </p>

      <div className="contact-actions">
        <a
          href="mailto:ninadpatil@example.com"
          className="contact-btn primary"
        >
          Contact Me
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn secondary"
        >
          Download Resume
        </a>
      </div>

      <div className="contact-links">
        <a href="https://github.com/yourusername">GitHub</a>
        <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
        <a href="mailto:ninadpatil@example.com">Email</a>
      </div>
    </section>
  );
}

export default Contact;
