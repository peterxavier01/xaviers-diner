import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import Logo from "../../assets/logo-light.png";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/products", title: "Menu" },
    { path: "/contact", title: "Contact" },
  ];

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="navbar">
      <Container className="navContainer">
        <Navbar.Brand href="/" className="text-white logo-container">
          <img src={Logo} alt="logo" className="logo" />
          <p className="logo-text text-white">Xavier's Diner</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
