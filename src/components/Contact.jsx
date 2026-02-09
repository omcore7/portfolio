import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    try {
      // 1) Save to Firestore
      await addDoc(collection(db, "messages"), {
        ...payload,
        createdAt: serverTimestamp(),
      });

      // 2) Send email to you (EmailJS)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: payload.name,
          email: payload.email,
          message: payload.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3500);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };


  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p className="contact-eyebrow">CONTACT</p>
        <h2 className="contact-title">Let’s Connect</h2>
      </div>

      <div className="contact-grid">
        {/* CONTACT INFO */}
        <div className="contact-card">
          <h3>Contact Info</h3>

          <div className="contact-item">
            <span className=" icon email">✉️</span>
            <div>
              <strong>Email</strong>
              <p>om.core78@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon linkedin">in</span>
            <div>
              <strong>LinkedIn</strong>
              <p>linkedin.com/in/chelsea-ochoa</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon github">🐙</span>
            <div>
              <strong>GitHub</strong>
              <p>github.com/omcore7</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon location">📍</span>
            <div>
              <strong>Location</strong>
              <p>Idaho, USA (MST)</p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-card">
          <h3>Send a Message</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
            </label>

            <label>
              Message
              <textarea
                rows="4"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
              />
            </label>

            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

           {status === "success" && (
              <div className="form-toast-wrapper">
                <div className="form-toast success">
                  <span className="toast-dot"></span>
                  Message sent — I’ll reply soon.
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="form-toast-wrapper">
                <div className="form-toast error">
                  <span className="toast-dot"></span>
                  Something went wrong. Please try again.
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="contact-pill">
        <span>💼 Open to: Frontend / Full-Stack Internships</span>
        <span>⚡ Tech: React, Node/Express, SQL, Firebase</span>
      </div>
    </section>
  );
}