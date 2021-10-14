import React from "react";

// Router stuff
import { Link, useLocation } from "react-router-dom";

/**
  For a responsive link in the navbar, so it activates (sets color to white
  in dark mode and to black in light mode) when the link matches the current
  page.
**/
const RespLink = ({ children, to, ...rest }) => {
  const { pathname } = useLocation();

  return (
    <Link
      {...rest}
      to={to}
      className={`nav-link ${pathname === to ? "active" : ""}`}
    >
      {children}
    </Link>
  );
};

export default RespLink;
