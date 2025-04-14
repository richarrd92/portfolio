import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faDownload,
  faEnvelope,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

library.add(
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faDatabase,
  faPython,
  faLinkedin,
  faGithub,
  faCode,
  faDownload,
  faEnvelope,
  faFileLines
);

const About = () => {
  return (
    <motion.about
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="about-section"
    >
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-links">
          {" "}
          <div className="cv-download">
            <a href="/Resume.pdf" download="Resume" className="download-button">
              <FontAwesomeIcon
                icon={["fas", "file-lines"]}
                style={{ marginRight: "8px", fontSize: "14px" }}
              />
              Resume
            </a>
          </div>
          <div className="social-links">
            <a
              href="mailto:richardmaliyetu@gmail.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Send me an email"
            >
              <FontAwesomeIcon icon={["fas", "envelope"]} />
            </a>
            <a
              href="https://www.linkedin.com/in/richardmaliyetu"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Connect with me on LinkedIn"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a
              href="https://github.com/richarrd92"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Check out my GitHub profile"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>
        </div>

        <div className="about-content">
          <p className="about-text">
            I'm Richard Maliyetu, a senior Computer Science student at UMBC,
            graduating in May 2025 with a current GPA of 3.8. I've been
            recognized on the Dean’s List three times and completed rigorous
            coursework in Object-Oriented Programming, Data Structures, Design &
            Analysis of Algorithms, Software Engineering, Database management
            Systems and Artificial Intelligence. Each project and challenge has
            strengthened my passion for applying these skills in real-world
            settings and continuing to grow in the dynamic tech industry.
          </p>
          <p className="about-text">
            I'm very passionate about full-stack web development, building
            secure, scalable applications with tools like React, FastAPI, and
            MariaDB etc. I'm currently working on the UMBC Retriever Essentials
            web application as part of a Software Engineering course group
            project; an initiative aimed at streamlining the management and
            distribution of food and essential items to students in need. I find
            real purpose in solving meaningful problems through thoughtful,
            functional code.
          </p>
          <p className="about-text">
            I'm excited to contribute to agile teams, embrace modern version
            control with Git, and quickly adapt to new technologies. Whether
            developing backend APIs, implementing clean UIs, or tackling
            algorithmic challenges, I bring energy, creativity, and a strong
            commitment to writing efficient, maintainable code.
          </p>

          <div className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <FontAwesomeIcon
                  icon={["fab", "python"]}
                  className="skill-icon"
                />
                <p className="skill-text">Python</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon
                  icon={["fas", "code"]}
                  className="skill-icon"
                />
                <p className="skill-text">C++</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon
                  icon={["fab", "html5"]}
                  className="skill-icon"
                />
                <p className="skill-text">HTML5</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon
                  icon={["fab", "css3-alt"]}
                  className="skill-icon"
                />
                <p className="skill-text">CSS3</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon icon={["fab", "js"]} className="skill-icon" />
                <p className="skill-text">JavaScript</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon
                  icon={["fab", "react"]}
                  className="skill-icon"
                />
                <p className="skill-text">React</p>
              </div>
              <div className="skill-item">
                <FontAwesomeIcon
                  icon={["fas", "database"]}
                  className="skill-icon"
                />
                <p className="skill-text">SQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.about>
  );
};

export default About;
