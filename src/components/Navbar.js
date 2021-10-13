import React from "react";

import {
  Navbar as NavbarBootstrap,
  Container,
  Nav,
  Button,
} from "react-bootstrap";
import RespLink from "./RespLink";
import logo from "../assets/note.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import useStore from "../lib/state";
import { useAuthContext } from "../context/auth";

const Navbar = () => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const { logout } = useAuthContext();
  const history = useHistory();
  const { pathname } = useLocation();

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
