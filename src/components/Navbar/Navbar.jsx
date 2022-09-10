import { useState } from "react";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { navbarVariants, links } from "../../data";

import "./Navbar.css";
import Logo from "../../assets/logo-light.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav-bar" id="nav-bar">
      <div className="nav-container container">
        <a href="/" className="text-white logo-container">
          <img src={Logo} alt="logo" className="logo" />
          <span className="logo-text text-white">Xavier's Diner</span>
        </a>
        {isOpen ? (
          <AiOutlineCloseCircle
            className="menu text-white fs-1"
            onClick={handleClick}
          />
        ) : (
          <AiOutlineMenu
            className="menu text-white fs-3"
            onClick={handleClick}
          />
        )}
        <div className="menu-items-container">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              style={{ color: "var(--white)" }}
              className={({ isActive }) => (isActive ? "navbar-active" : "")}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="responsive-navbar">
        {isOpen && (
          <motion.div
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
          >
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                style={{ color: "var(--white)" }}
                className={({ isActive }) => (isActive ? "navbar-active" : "")}
                onClick={closeNav}
              >
                {link.title}
              </NavLink>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
