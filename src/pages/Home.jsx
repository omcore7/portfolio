Home.jsx

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import leftFlowers from "../assets/flowers-left.png"
import rightFlowers from "../assets/flowers-right.png"

function Home() {
  return (
    <motion.main
      className="page-container home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* HOME FLOWERS */}

      <img
        src={leftFlowers}
        className="home-flowers home-flowers-left"
        alt=""
        aria-hidden="true"
      />

      <img
        src={rightFlowers}
        className="home-flowers home-flowers-right"
        alt=""
        aria-hidden="true"
      />

      <div className="hero-layout">
        {/* LEFT SIDE */}

        <motion.section
          className="hero-content"
          initial={{ x: -70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <p className="hero-intro">
            Hi, I'm
          </p>

          <h1 className="hero-title">
            Chelsea Ochoa Mata
          </h1>

          <h2 className="hero-subtitle">
            Software Engineering Student · Full-Stack Developer
          </h2>

          <p className="hero-description">
            Software engineering student at BYU–Idaho focused on full-stack
            development and creating thoughtful, user-friendly applications
            with React, JavaScript, and modern web technologies.
          </p>

          <div className="hero-buttons">
            <Link
              to="/projects"
              className="primary-button"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="secondary-button"
            >
              Contact Me
            </Link>
          </div>
        </motion.section>

        {/* RIGHT SIDE */}

        <motion.div
          className="hero-image-container"
          initial={{ x: 70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
        >
          <div className="profile-card">
            <p className="image-placeholder">
              Your Picture Here
            </p>
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}

export default Home