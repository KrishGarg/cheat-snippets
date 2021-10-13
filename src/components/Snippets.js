import React from "react";

import useStore from "../lib/state";
import { useHistory } from "react-router";

const Snippets = () => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const history = useHistory();

  if (!isAuthenticated) {
    history.push("/login");
  }

  return <div style={{ fontSize: "20em" }}>Hi</div>;
};

export default Snippets;
