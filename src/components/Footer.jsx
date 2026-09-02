import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"

import { MdEmail } from "react-icons/md"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2 className="footer-logo">
          COM
        </h2>

        <div className="footer-wave" />

        <p className="footer-text">
          Software Engineering Student · Full-Stack Developer
        </p>

        <div className="footer-socials">

          <a
            href="YOUR_GITHUB_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:YOUR_EMAIL"
            aria-label="Email Chelsea"
          >
            <MdEmail />
          </a>

        </div>

        <p className="copyright">
          © 2026 Chelsea Ochoa Mata. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer