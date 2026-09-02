import {
  FaGithub,
} from "react-icons/fa"

import {
  FiExternalLink,
} from "react-icons/fi"

import projectsFlowersLeft from "../assets/projects-flowers-left.png"
import projectsFlowersRight from "../assets/projects-flowers-right.png"

function Projects() {
  return (
    <main className="page-container projects-page">

      <img
        src={projectsFlowersLeft}
        className="projects-flowers projects-flowers-left"
        alt=""
        aria-hidden="true"
      />

      <img
        src={projectsFlowersRight}
        className="projects-flowers projects-flowers-right"
        alt=""
        aria-hidden="true"
      />

      {/* HEADER */}

      <div className="projects-header">

        <p className="projects-small-text">
            PORTFOLIO
        </p>

        <h1 className="projects-main-title">
            My Projects
        </h1>

        <div className="title-line"></div>

            <p className="projects-description">
                Here are some projects I have worked on during
                my software engineering journey.
            </p>

    </div>

      {/* PROJECT GRID */}

      <div className="projects-grid">

        {/* PROJECT CARD */}

        <article className="project-card">

          <div className="project-image">
            Project Image
          </div>

          <h2 className="project-title">
            Mexican Bakery Website
          </h2>

          <p className="project-text">
            A responsive bakery website designed to showcase
            products, company history, and modern UI design.
          </p>

          <div className="project-tags">

            <span className="project-tag">
              React
            </span>

            <span className="project-tag">
              Tailwind
            </span>

            <span className="project-tag">
              JavaScript
            </span>

          </div>

          <div className="project-links">

            <a
              href="#"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              target="_blank"
            >
              <FiExternalLink />
            </a>

          </div>

        </article>

        {/* SECOND CARD */}

        <article className="project-card project-card-featured">

          <img
            src={projectsFlowersRight}
            className="project-card-flower"
            alt=""
            aria-hidden="true"
          />

          <div className="project-image">
            Project Image
          </div>

          <h2 className="project-title">
            Health Tracker
          </h2>

          <p className="project-text">
            Interactive webpage focused on health dimensions,
            scriptures, and JavaScript interactivity.
          </p>

          <div className="project-tags">

            <span className="project-tag">
              HTML
            </span>

            <span className="project-tag">
              CSS
            </span>

            <span className="project-tag">
              JavaScript
            </span>

          </div>

          <div className="project-links">

            <a
              href="#"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              target="_blank"
            >
              <FiExternalLink />
            </a>

          </div>

        </article>

        {/* THIRD CARD */}

        <article className="project-card">

          <div className="project-image">
            Project Image
          </div>

          <h2 className="project-title">
            Water Sensor System
          </h2>

          <p className="project-text">
            Water level detection project combining sensors,
            electronics, and programming logic.
          </p>

          <div className="project-tags">

            <span className="project-tag">
              Arduino
            </span>

            <span className="project-tag">
              IoT
            </span>

            <span className="project-tag">
              Hardware
            </span>

          </div>

          <div className="project-links">

            <a
              href="#"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              target="_blank"
            >
              <FiExternalLink />
            </a>

          </div>

        </article>

      </div>

    </main>
  )
}

export default Projects
