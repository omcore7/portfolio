import "./Projects.css";

const projects = [
  {
    title: "Personal Portfolio",
    desc: "A responsive personal portfolio website designed to showcase my projects, skills, and experience. Includes smooth navigation, a projects showcase, and a contact form powered by Firebase.",
    tagsTop: ["React", "Vite", "JavaScript", "CSS"],
    tagsBottom: ["Frontend App", "Responsive Design", "Firebase"],
    img: "/portfolio.png",
    href: "https://github.com/ochoa07/roomiesChore",
  },
  {
    title: "RepTrack",
    desc: "A frontend web application that helps users track workouts, visualize progress, and stay consistent through streak tracking.",
    tagsTop: ["JavaScript", "Html", "CSS", "Chart.js"],
    tagsBottom: ["Frontend App", "Data Vizualization", "Local Storage"],
    img: "/reptrack.png",
    href: "https://github.com/ochoa07/reptrack",
  },
  {
    title: "RoomiesChore",
    desc: "A collaborative mobile app that helps roommates assign, manage, and track household chores with real-time updates.",
    tagsTop: ["React Native", "Expo", "TypeScript", "Firebase"],
    tagsBottom: ["Full-Stack App", "Mobile App", "Firestore"],
    img: "/rommiesChore.png",
    href: "https://github.com/ochoa07/roomiesChore",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        <p className="projects-eyebrow">PROJECTS</p>
        <h2 className="projects-title">Some Things I’ve Built</h2>
        <p className="projects-subtitle">
          Here are a few of the projects I’ve worked on recently. Feel free to check them out!
        </p>

        <div className="projects-card">
          {projects.map((p, idx) => (
            <div key={p.title} className={`project-row ${idx !== 0 ? "row-divider" : ""}`}>
              <div className="project-left">
                <div className="project-thumb">
                  <img src={p.img} alt={`${p.title} screenshot`} />
                </div>
              </div>

              <div className="project-mid">
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="tag-row">
                  {p.tagsTop.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="tag-row">
                  {p.tagsBottom.map((t) => (
                    <span key={t} className="tag tag-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-right">
                <a className="project-btn" href={p.href} target="_blank" rel="noreferrer">
                  <span>View Project</span>
                  <span className="arrow">›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}