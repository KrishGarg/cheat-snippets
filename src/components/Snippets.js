import React from "react";

// State
import useStore from "../lib/state";

// Router stuff
import { useHistory } from "react-router";

const Snippets = () => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const user = useStore((state) => state.user);
  const history = useHistory();

  // If the user isn't authenticated, we redirect them to login page.
  if (!isAuthenticated) {
    history.push("/login");
  }

  return <div>{isAuthenticated && `Welcome ${user?.displayName}`}</div>;
};

export default Snippets;
