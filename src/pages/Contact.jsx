import { useRef, useState } from "react"

import emailjs from "@emailjs/browser"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import contactFlowersLeft from "../assets/contact-flowers-left.png"
import contactFlowersRight from "../assets/contact-flowers-right.png"

function Contact() {
  const form = useRef()
  const [isSending, setIsSending] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    const formElement = form.current
    const formData = new FormData(formElement)

    const name = formData.get("user_name")?.trim()
    const email = formData.get("user_email")?.trim()
    const message = formData.get("message")?.trim()

    // Check for empty fields
    if (!name || !email || !message) {
      toast.error("Please complete all required fields.")
      return
    }

    // Check whether the email has a valid format
    if (!formElement.checkValidity()) {
      toast.error("Please enter a valid email address.")
      formElement.reportValidity()
      return
    }

    setIsSending(true)

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      console.log(result.text)

      toast.success("Message sent successfully!")
      formElement.reset()
    } catch (error) {
      console.error("EmailJS error:", error)

      toast.error(
        "Failed to send your message. Please try again later."
      )
    } finally {
      setIsSending(false)
    }
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
          noValidate
        >
          <div className="input-group">
            <label htmlFor="user_name">
              Name
            </label>

            <input
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="user_email">
              Email
            </label>

            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              rows="6"
              name="message"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="primary-button"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* SOCIALS */}

        <div className="social-links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:your@email.com"
            aria-label="Send an email"
          >
            <MdEmail />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
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