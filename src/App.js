import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Snippets from "./components/Snippets";
import Login from "./components/Login";

// Auth stuff
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

// State
import useStore from "./lib/state";

function App() {
  // Auth change registering
  const setAuthStatus = useStore((state) => state.setAuthStatus);
  const setUser = useStore((state) => state.setUser);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthStatus(true);
      setUser(user);
    } else {
      setAuthStatus(false);
      setUser(null);
    }
  });

  return (
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
  );
}

export default App;
