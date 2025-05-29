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
  faJava,
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
  faJava,
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
      {/* <div className="about-container"> */}
      <h2 className="about-title">About</h2>
      <div className="about-links">
        {" "}
        {/* <div className="cv-download">
          <a href="/Resume.pdf" download="Resume" className="download-button">
            <FontAwesomeIcon
              icon={["fas", "file-lines"]}
              style={{ marginRight: "8px", fontSize: "14px" }}
            />
            Resume
          </a>
        </div> */}
        <div className="social-links">
          <a href="/Resume.pdf" download="Resume" className="social-icon" title="Download my resume">
            <FontAwesomeIcon
              icon={["fas", "file-lines"]}
            />
          </a>
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
        {" "}
        <p className="about-text">
          I'm Richard Maliyetu, a recent Computer Science graduate from UMBC
          with a GPA of 3.6. During my academic journey, I completed hands-on
          coursework in Object-Oriented Programming, Data Structures,
          Algorithms, Software Engineering, Database Systems, Operating Systems,
          and Artificial Intelligence. These experiences fueled my passion for
          solving real-world problems through thoughtful, functional software.
        </p>
        <p className="about-text">
          I specialize in full-stack development and enjoy building secure,
          scalable applications with technologies like React, FastAPI, and
          MariaDB. One of my recent projects involved leading the development of
          the UMBC Essentials Inventory App, a web platform designed to help
          manage and distribute food and essential items to students in need.
          This work combined technical problem-solving with real social impact,
          which motivates me in every project I take on.
        </p>
        <p className="about-text">
          I thrive in Agile environments and am proficient with Git-based
          version control, Linux systems, and modern development stacks. Whether
          I'm designing backend APIs, crafting responsive UIs with Tailwind CSS,
          or tackling algorithmic challenges, I bring a mindset focused on
          scalability, maintainability, and clean code.
        </p>
        <p className="about-text">
          Outside of tech, I stay active through soccer, workouts, and FIFA
          matches with friends. I'm also a die-hard FC Barcelona fan, visiting
          Camp Nou is definitely on my bucket list.
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
              <FontAwesomeIcon icon={["fab", "java"]} className="skill-icon" />
              <p className="skill-text">Java</p>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={["fas", "code"]} className="skill-icon" />
              <p className="skill-text">C++</p>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={["fab", "html5"]} className="skill-icon" />
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
              <FontAwesomeIcon icon={["fab", "react"]} className="skill-icon" />
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
      {/* </div> */}
    </motion.about>
  );
};

export default About;
