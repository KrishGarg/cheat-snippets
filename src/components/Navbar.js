import React from "react";

import { Navbar as NavbarBootstrap, Container, Nav } from "react-bootstrap";
import logo from "../assets/note.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarBootstrap bg="dark" expand="lg" variant="dark">
      <Container>
        <NavbarBootstrap.Brand href="#home">
          <img src={logo} alt="CheatSheet" style={{ maxHeight: "2em" }} />
          <span style={{ marginLeft: "0.5em" }}>CheatSheet</span>
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
};

export default Navbar;
