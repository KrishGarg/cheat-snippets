import React from "react";

// State
import useStore from "../lib/state";

const Snippets = () => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const user = useStore((state) => state.user);

  return <div>{isAuthenticated && `Welcome ${user?.displayName}`}</div>;
};

export default Snippets;
