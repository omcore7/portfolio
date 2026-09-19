import { useState } from "react"

import { NavLink, Link } from "react-router-dom"

import { HiMenu, HiX } from "react-icons/hi"



function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <Link
          to="/"
          className="logo-link"
          aria-label="Go to home page"
          onClick={() => setMenuOpen(false)}
        >
          <h1 className="logo">
            COM
          </h1>
        </Link>

        {/* DESKTOP LINKS */}

        <div className="nav-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-link"
                : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-link"
                : "nav-link"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-link"
                : "nav-link"
            }
          >
            Contact
          </NavLink>

        </div>

        {/* MOBILE BUTTON */}

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {
            menuOpen
              ? <HiX />
              : <HiMenu />
          }

        </button>

      </div>

      {/* MOBILE MENU */}

      <div
        className={
          menuOpen
            ? "mobile-menu active-mobile-menu"
            : "mobile-menu"
        }
      >

        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="mobile-link"
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          onClick={() => setMenuOpen(false)}
          className="mobile-link"
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="mobile-link"
        >
          Contact
        </NavLink>

      </div>

    </nav>
  )
}

export default Navbar