import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import "../App.css";

// recent projects
const recentProjects = [
  {
    id: 1,
    title: "UMBC Essentials Inventory App ",
    technologies: "React, HTML, CSS, Python, Firebase, MariaDB",
    images: [
      "/inventory-app/image1.png",
      "/inventory-app/image2.png",
      "/inventory-app/image3.png",
      "/inventory-app/image4.png",
      "/inventory-app/image5.png",
      "/inventory-app/image6.png",
    ],
    github: "https://github.com/richarrd92/umbc-inventory-app",
    live: "#",
  },
  {
    id: 2,
    title: "Editor App (SaaS)",
    technologies: "Next.js, Prisma, NeonDB, Cloudinary, Clerk, Daisy UI",
    images: [
      "/edit-app/image1.png",
      "/edit-app/image2.png",
      "/edit-app/image3.png",
      "/edit-app/image4.png",
    ],
    github: "https://github.com/richarrd92/editor-app",
    live: "#",
  },
  {
    id: 3,
    title: "Note App",
    technologies: "TypeScript, Appwrite, React, Tailwind CSS",
    images: [
      "/note-app/image1.png",
      "/note-app/image2.png",
      "/note-app/image3.png",
      "/note-app/image4.png",
      "/note-app/image5.png",
    ],
    github: "https://github.com/richarrd92/note-app",
    live: "#",
  },
  {
    id: 4,
    title: "Algorithm Visualizer - Path Finder",
    technologies: "TypeScript, React, Next.js, Tailwind CSS",
    images: [
      "/path-finder-app/image1.png",
      "/path-finder-app/image2.png",
      "/path-finder-app/image3.png",
      "/path-finder-app/image4.png",
    ],
    github: "https://github.com/richarrd92/pathFinder-app",
    live: "#",
  },
];

// project card
function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % project.images.length
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="project-card">
      <img
        src={project.images[currentImageIndex]}
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
          <FaGithub style={{ marginRight: "5px" }}/> {" "} GitHub
        </a>
        {/* <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          title="Live Demo"
          className={`live-demo ${project.id === 1 || project.id === 2 || project.id === 4 ? "disabled" : ""}`}
        >
          Live Demo
        </a> */}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <motion.project
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="projects"
    >
        <div className="projects-content">
          <h2 className="title">Projects</h2>
          <p className="description">
            Recent projects I've worked on. Feel free to explore
            and check out the source code on GitHub.
          </p>

          {/* Project Cards Grid */}
          <div className="project-cards">
            {recentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
    </motion.project>
  );
}

export default Projects;
