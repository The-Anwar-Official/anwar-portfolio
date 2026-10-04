const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "C++", "C", "PHP", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "Backend & APIs",
    skills: ["Java", "REST APIs", "API Integration"],
  },
  {
    title: "Database",
    skills: ["MySQL", "Firebase Firestore"],
  },
  {
    title: "Other",
    skills: ["Android Development", "WordPress", "Git & GitHub"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <p className="section-label">TECHNICAL SKILLS</p>

        <h2>Tools and technologies I work with.</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}