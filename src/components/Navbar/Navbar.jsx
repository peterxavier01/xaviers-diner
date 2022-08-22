import { NavLink } from "react-router-dom";
import { useState } from "react";

import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

import "./Navbar.css";
import Logo from "../../assets/logo-light.png";

const navbarVariants = {
  hidden: {
    y: "-10px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2,
    },
  },
};

const Navbar = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/products", title: "Menu" },
    { path: "/contact", title: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav-bar">
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
