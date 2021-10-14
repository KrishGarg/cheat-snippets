import React from "react";

// Bootstrap Components
import {
  Navbar as NavbarBootstrap,
  Container,
  Nav,
  Button,
} from "react-bootstrap";

// My Components
import RespLink from "./RespLink";

// Logo
import logo from "../assets/note.png";

// Router stuff
import { Link, useHistory, useLocation } from "react-router-dom";

// State
import useStore from "../lib/state";

// Helper methods
import { logout } from "../lib/firebase";

const Navbar = () => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const history = useHistory();
  const { pathname } = useLocation();

  // Log in/out button click handler, logouts if an authenticated user clicks, and redirects to login page if an unauthenticated user clicks.
  const handleLoginOut = () => {
    if (isAuthenticated) {
      logout();
    } else {
      history.push("/login");
    }
  };

  return (
    <NavbarBootstrap bg="dark" expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="CheatSheet" style={{ maxHeight: "2em" }} />
          <span style={{ marginLeft: "0.5em" }}>CheatSheet</span>
        </Link>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <RespLink to="/">Your Snippets</RespLink>
          </Nav>
          <Button
            onClick={handleLoginOut}
            variant={isAuthenticated ? "danger" : "primary"}
            disabled={pathname === "/login"}
          >
            Log{isAuthenticated ? "out" : "in"}
          </Button>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
};

export default Navbar;
