import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Snippets from "./components/Snippets";
import Login from "./components/Login";

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
            <Login />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
