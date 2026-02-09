import porfile from "../assets/porfile.png";
import "./Hero.css";

const skillSections = [
  {
    title: "Strongest",
    items: [
      { label: "React", badge: "⚛", badgeClass: "badge-react" },
      { label: "JavaScript", badge: "JS", badgeClass: "badge-node" },
      { label: "Node / Express", badge: "JS", badgeClass: "badge-node" },
      { label: "SQL (MySQL)", badge: "🛢", badgeClass: "badge-sql" },
      { label: "Firebase Firestore", badge: "🔥", badgeClass: "badge-fire" },
    ],
  },
  {
    title: "Comfortable with",
    items: [
      { label: "HTML", badge: "</>", badgeClass: "badge-tools" },
      { label: "CSS", badge: "</>", badgeClass: "badge-tools" },
      { label: "Git / GitHub", badge: "⌁", badgeClass: "badge-tools" },
      { label: "Vite", badge: "⚡", badgeClass: "badge-tools" },
      { label: "Netlify", badge: "🚀", badgeClass: "badge-tools" },
    ],
  },
  {
    title: "Learning / Basic",
    items: [
      { label: "MongoDB", badge: "🍃", badgeClass: "badge-db" },
      { label: "React Native", badge: "📱", badgeClass: "badge-mobile" },
      { label: "Expo", badge: "📦", badgeClass: "badge-mobile" },
      { label: "Python", badge: "Py", badgeClass: "badge-python" },
      { label: "C#", badge: "C#", badgeClass: "badge-csharp" },
      { label: "Java", badge: "Java", badgeClass: "badge-java" },
    ],
  },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-name">CHELSEA OCHOA MATA</p>

        <h1 className="hero-title">Full-Stack Web Developer</h1>

        <p className="hero-description">
          I enjoy designing and building full-stack web applications, working
          across the frontend, backend, and database layers while continuing to
          learn industry best practices.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </div>

        {/* ===== TECH STACK CARD (ALL SCROLLS) ===== */}
        <div className="stack-card">
          <div className="stack-scroll">
            {skillSections.map((section) => (
              <div key={section.title}>
                <div className="stack-section-title">{section.title}</div>

                {section.items.map((item) => (
                  <div className="stack-row" key={item.label}>
                    <span className={`badge ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={porfile} alt="Chelsea Ochoa Mata" />
      </div>
    </section>
  );
}

export default Hero;