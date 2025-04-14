import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import "../App.css";

function Home() {
  const [openFolders, setOpenFolders] = useState({});
  const navigate = useNavigate();

  const handleClick = (route) => {
    setOpenFolders((prev) => ({ ...prev, [route]: true }));
    setTimeout(() => navigate(route), 200); 
  };

  const FolderIcon = ({ route, label }) => {
    const isOpen = openFolders[route];

    return (
      <div
        className={`folder-icon-wrapper ${isOpen ? "opening" : ""}`}
        onClick={() => handleClick(route)}
      >
        {isOpen ? (
          <FaFolderOpen className="folder-icon" />
        ) : (
          <FaFolder className="folder-icon" />
        )}
        <span className="folder-label">{label}</span>
      </div>
    );
  };

return (
  <motion.header
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="header"
  >
    <div className="header-content">
      <img src="/portrait.jpg" alt="Profile" className="profile-img" />
      <h1>Richard Maliyetu</h1>
      <p className="intro-text">
        Aspiring Software Engineer | Full-Stack Developer
      </p>
      <div className="folder-icons">
        <FolderIcon route="/about" label="About" className="folder-icon" />
        <FolderIcon
          route="/projects"
          label="Projects"
          className="folder-icon"
        />
        {/* You can add more icons like Contact or Resume later */}
      </div>
    </div>
  </motion.header>
);
}

export default Home;
