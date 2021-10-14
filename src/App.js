import React from "react";

// Router Stuff
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Snippets from "./components/Snippets";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

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
        <PrivateRoute exact path="/" component={Snippets} />
        <PublicRoute restricted exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
