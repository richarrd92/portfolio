import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import "../App.css";

// recent projects
const recentProjects = [
  {
    id: 1,
    title: "HobbyMatch (Ongoing Development)",
    technologies: "React, HTML, CSS, Python, Firebase, PostgreSQL",
    image: "/hobbymatch-app/image1.png",
    github: "https://github.com/richarrd92/hobbymatch",
    live: "#",
  },
  {
    id: 2,
    title: "UMBC Essentials Inventory App",
    technologies: "React, HTML, CSS, Python, Firebase, MariaDB",
    image: "/inventory-app/image1.png",
    github: "https://github.com/richarrd92/umbc-inventory-app",
    live: "#",
  },
  {
    id: 3,
    title: "Editor App (SaaS)",
    technologies: "Next.js, Prisma, NeonDB, Cloudinary, Clerk, Daisy UI",
    image: "/edit-app/image1.png",
    github: "https://github.com/richarrd92/editor-app",
    live: "#",
  },
  {
    id: 4,
    title: "Algorithm Visualizer - Path Finder",
    technologies: "TypeScript, React, Next.js, Tailwind CSS",
    image: "/path-finder-app/image1.png",
    github: "https://github.com/richarrd92/pathFinder-app",
    live: "#",
  },
  {
    id: 5,
    title: "Note App",
    technologies: "TypeScript, Appwrite, React, Tailwind CSS",
    image: "/note-app/image1.png",
    github: "https://github.com/richarrd92/note-app",
    live: "#",
  },
  {
    id: 6,
    title: "Tic-tac-toe App",
    technologies: "React, HTML, CSS, JS",
    image: "/tic-tac-toe-app/image1.png",
    github:
      "https://github.com/richarrd92/self-learning/tree/main/react/tic-tac-toe",
    live: "#",
  },
  {
    id: 7,
    title: "Calculator App",
    technologies: "JavaScript, HTML, CSS",
    image: "/calculator-app/image1.png",
    github:
      "https://github.com/richarrd92/self-learning/tree/main/javascript/simple-calculator",
    live: "#",
  },
  {
    id: 8,
    title: "Currency Converter App",
    technologies: "React, Tailwind CSS, RESTFul API",
    image: "/currency-converter-app/image1.png",
    github:
      "https://github.com/richarrd92/self-learning/tree/main/react/currencyconverter",
    live: "#",
  },
  {
    id: 9,
    title: "Password Generator App",
    technologies: "React, Tailwind CSS",
    image: "/password-generator-app/image1.png",
    github:
      "https://github.com/richarrd92/self-learning/tree/main/react/passwordgenerator",
    live: "#",
  },
];

// Project card component
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="project-image"
      />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-technologies">{project.technologies}</p>
      <div className="links">
        <a
          href={project.github}
          // target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="github-icon"
        >
          <FaGithub style={{ marginRight: "5px" }} /> GitHub
        </a>
      </div>
    </div>
  );
}

// Main Projects component
function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="projects"
    >
      <div className="projects-content">
        <h2 className="title">Projects</h2>
        <p className="description">
          Projects I've worked on. Feel free to explore and check out the source
          code on GitHub.
        </p>

        <div className="project-cards">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
