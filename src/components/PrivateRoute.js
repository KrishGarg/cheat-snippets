import React from "react";

import { Redirect, Route } from "react-router-dom";
import useStore from "../lib/state";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(_) => (isAuthenticated ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
