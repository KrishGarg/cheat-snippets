import React from "react";

// Router stuff
import { Route, Redirect } from "react-router-dom";

// State
import useStore from "../lib/state";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
