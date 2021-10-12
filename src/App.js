import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Snippets from "./components/Snippets";

// Context
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Snippets />
          </Route>
          <Route exact path="/login">
            <h1 style={{ fontSize: "3em" }}>hello world</h1>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
