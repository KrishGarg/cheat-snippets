import React from "react";

import { Link, useLocation } from "react-router-dom";

const RespLink = ({ children, to, ...rest }) => {
  const { pathname } = useLocation();

  return (
    <Link {...rest} className={`nav-link ${pathname === to ? "active" : ""}`}>
      {children}
    </Link>
  );
};

export default RespLink;
