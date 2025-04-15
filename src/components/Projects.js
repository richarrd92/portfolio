import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import "../App.css";

// recent projects
const recentProjects = [
  {
    id: 1,
    title: "Inventory Manager (in progress)",
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
    title: "Content Studio",
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
    title: "Notes",
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
    title: "AlgoPath Finder",
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
    }, 2500); // Change image every 2.5 seconds
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
          <FaGithub />
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          title="Live Demo"
          className={`live-demo ${project.id === 1 ? "disabled" : ""}`}
        >
          Live Demo
        </a>
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
          <h2>Projects</h2>
          <p>
            Recent projects I've worked on. Feel free to explore
            and check out the live demos and source code.
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
