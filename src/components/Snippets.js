import React from "react";

import useStore from "../lib/state";
import { useHistory } from "react-router";

const Snippets = () => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const user = useStore((state) => state.user);
  const history = useHistory();

  if (!isAuthenticated) {
    history.push("/login");
  }

  return <div>{isAuthenticated && `Welcome ${user?.displayName}`}</div>;
};

export default Snippets;
