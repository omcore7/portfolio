import { useRef } from "react"

import emailjs from "@emailjs/browser"

import {
  ToastContainer,
  toast,
} from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"

import { MdEmail } from "react-icons/md"

import contactFlowersLeft from "../assets/contact-flowers-left.png"
import contactFlowersRight from "../assets/contact-flowers-right.png"

function Contact() {

  const form = useRef()
  const sendEmail = (e) => {

  e.preventDefault()

  emailjs
  .sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,

    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

    form.current,

    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )

    .then(
  (result) => {

    console.log(result.text)

    toast.success("Message sent successfully!")
    form.current.reset()

  },

  (error) => {

    console.log(error)

    toast.error("Something went wrong.")

  }
)
}

  return (
    <div className="page-container contact-page">

      <img
        src={contactFlowersLeft}
        className="contact-flowers contact-flowers-left"
        alt=""
        aria-hidden="true"
      />

      <img
        src={contactFlowersRight}
        className="contact-flowers contact-flowers-right"
        alt=""
        aria-hidden="true"
      />

      {/* HEADER */}

      <div className="contact-header">

        <p className="contact-small-text">
          CONTACT
        </p>

        <h1 className="contact-main-title">
          Let's Connect
        </h1>

        <div className="title-line contact-title-line"></div>

        <p className="contact-description">
          Feel free to reach out for collaborations,
          projects, or opportunities.
        </p>

      </div>

      {/* CONTACT CARD */}

      <div className="contact-card">

        {/* FORM */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <div className="input-group">

            <label>
              Name
            </label>

            <input
              type="text"
              name="user_name"
              placeholder="Your name"
            />

          </div>

          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="user_email"
              placeholder="Your email"
            />

          </div>

          <div className="input-group">

            <label>
              Message
            </label>

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
            ></textarea>

          </div>

          <button
            type="submit"
            className="primary-button"
          >
            Send Message
          </button>

        </form>

        {/* SOCIALS */}

        <div className="social-links">

          <a
            href="https://linkedin.com"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:your@email.com"
          >
            <MdEmail />
          </a>

          <a
            href="https://github.com"
            target="_blank"
          >
            <FaGithub />
          </a>

        </div>

      </div>

      <ToastContainer

        position="bottom-right"

        autoClose={3000}

        hideProgressBar={true}

        newestOnTop={true}

        closeOnClick

        pauseOnHover

        draggable

        theme="dark"
      />
    </div>
  )
}

export default Contact
