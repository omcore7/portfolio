import {
  FaGithub,
} from "react-icons/fa"

import {
  FiExternalLink,
} from "react-icons/fi"

import projectsFlowersLeft from "../assets/projects-flowers-left.png"
import projectsFlowersRight from "../assets/projects-flowers-right.png"
import portfolioPreview from "../assets/portfolio-preview.png"
import reptrackPreview from "../assets/reptrack-preview.png"
import custodialPreview from "../assets/custodial-preview.png"

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

        {/* PERSONAL PORTFOLIO */}

        <article className="project-card">

          <div className="project-image">
            <img
              src={portfolioPreview}
              alt="Preview of Chelsea Ochoa Mata's personal portfolio"
            />
          </div>

          <h2 className="project-title">
            Personal Portfolio
          </h2>

          <p className="project-text">
            A responsive personal portfolio showcasing my projects,
            technical skills, and contact information through a modern,
            nature-inspired design.
          </p>

          <div className="project-tags">

            <span className="project-tag">
              React
            </span>

            <span className="project-tag">
              Framer Motion
            </span>

            <span className="project-tag">
              EmailJS
            </span>

          </div>

          <div className="project-links">

            <a
              href="https://github.com/omcore7/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View portfolio source code on GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://portfolio-wine-eight-b0mp38lajj.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live portfolio"
            >
              <FiExternalLink />
            </a>

          </div>

        </article>

        {/* REPTRACK */}

        <article className="project-card project-card-featured">

          <img
            src={projectsFlowersRight}
            className="project-card-flower"
            alt=""
            aria-hidden="true"
          />

          <div className="project-image">
            <img
              src={reptrackPreview}
              alt="Preview of the RepTrack fitness tracking application"
            />
          </div>

          <h2 className="project-title">
            RepTrack
          </h2>

          <p className="project-text">
            A fitness tracking application that helps users organize
            exercises, record workout progress, and keep track of their
            training in one convenient place.
          </p>

          <div className="project-tags">

            <span className="project-tag">
              JavaScript
            </span>

            <span className="project-tag">
              HTML
            </span>

            <span className="project-tag">
              CSS
            </span>

          </div>

          <div className="project-links">

            <a
              href="https://github.com/omcore7/reptrack"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View RepTrack source code on GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://omcore7.github.io/reptrack/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live RepTrack application"
            >
              <FiExternalLink />
            </a>

          </div>

        </article>

        {/* CUSTODIAL TEAM OPERATIONS SYSTEM */}

        <article className="project-card">

          <div className="project-image">
            <img
              src={custodialPreview}
              alt="Preview of the Custodial Team Operations System"
            />
          </div>

          <h2 className="project-title">
            Custodial Team Operations System
          </h2>

          <p className="project-text">
            A role-based operations system designed to help supervisors
            assign work areas, organize daily tasks, and monitor team
            progress more efficiently.
          </p>

          <div className="project-tags">

            <span className="project-tag">
              React
            </span>

            <span className="project-tag">
              Supabase
            </span>

            <span className="project-tag">
              Tailwind CSS
            </span>

          </div>

          <div className="project-links">

            <a
              href="https://github.com/omcore7/custodial-team-operations"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View custodial system source code on GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://custodial-team-operations.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live custodial operations system"
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
