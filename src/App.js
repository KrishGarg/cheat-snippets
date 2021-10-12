import React from "react";

import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch></Switch>
    </>
  );
}

export default App;
