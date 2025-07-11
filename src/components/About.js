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
          <a
            href="/Richard_Maliyetu_Resume.pdf"
            download="Richard_Maliyetu_Resume"
            className="social-icon"
            title="Download my resume"
          >
            <FontAwesomeIcon icon={["fas", "file-lines"]} />
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
          Hi, I’m Richard Maliyetu, a recent Computer Science graduate from UMBC
          (GPA 3.6) with a strong background in C++, Linux systems programming,
          and full-stack development. My technical foundation was built through
          hands-on coursework in data structures, algorithms, operating systems,
          and object-oriented design, and I’ve applied those skills through
          personal projects, open-source work, and collaborative Agile teams.
        </p>
        <p className="about-text">
          I specialize in developing scalable, secure software using tools like
          C++, Python, React, FastAPI, and PostgreSQL. I’ve worked extensively
          in Linux environments, including building custom kernel modules and
          debugging low-level process behavior with tools like GDB and Valgrind.
          My systems-level work has sharpened my skills in memory management,
          multithreading, and performance tuning and it’s where I thrive the
          most.
        </p>
        <p className="about-text">
          Beyond systems programming, I enjoy full-stack application development
          and recently led the development of the UMBC Essentials Inventory
          platform, a student-focused tool that improved access to campus
          resources. I’ve also built social platforms like HobbyMatch and SaaS
          tools like an image/video Editor App, emphasizing secure
          authentication, clean APIs, and responsive UI design.
        </p>
        <p className="about-text">
          I’m currently pursuing a CompTIA Security+ certification and exploring
          the intersection of software engineering and cybersecurity with a
          focus on secure development, access control, and vulnerability
          prevention. As a U.S. citizen eligible for DoD Secret Clearance, I’m
          actively seeking full-time software engineering opportunities in
          defense, systems-level development, or backend-focused roles where I
          can build tools that make a real-world impact.
        </p>
        <p className="about-text">
          Outside of tech, I stay active through soccer and gym workouts, and to
          relax, I enjoy playing FIFA matches on playstation with friends. I’m a
          lifelong FC Barcelona fan, and visiting Camp Nou is definitely on my
          bucket list. Whether I’m solving bugs or collaborating on meaningful
          software, I love learning, building, and growing with great teams.
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
