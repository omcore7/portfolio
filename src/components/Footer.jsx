import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">
          © {new Date().getFullYear()} Chelsea Ochoa Mata
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/omcore7"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/chelsea-ochoa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:om.core78@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}