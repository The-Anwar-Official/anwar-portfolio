const projects = [
  {
    title: "Smart Career Assistance",
    description:
      "An AI-assisted Android application for resume building, mock interviews, placement preparation, and career guidance.",
    technologies: ["Java", "Android", "Firebase", "Gemini AI"],
    status: "Completed",
    link: "https://github.com/The-Anwar-Official/smart-career-assistant",
    linkText: "View on GitHub →",
  },
  {
    title: "Pottery & Crockery Website",
    description:
      "A responsive website created for a pottery and crockery business.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    status: "Completed",
    link: "#contact",
    linkText: "Project Details →",
  },
  {
    title: "Anwar Learner — WordPress Website & Blog",
    description:
      "A WordPress-based developer portfolio and blog used to showcase projects, technical learning, and development work.",
    technologies: [
      "WordPress",
      "Blogging",
      "Responsive Web Design",
      "Content Management",
    ],
    status: "Completed",
    link: "https://anwarlearner.blog",
    linkText: "Visit Website →",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <p className="section-label">SELECTED PROJECTS</p>

        <h2>Things I've built and things I'm building.</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.link}
                  target={
                    project.link.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    project.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {project.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}