import React from "react";

// Router Stuff
import { Route, Redirect } from "react-router-dom";

// State
import useStore from "../lib/state";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route (if logged in, redirect)
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
