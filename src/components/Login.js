import React from "react";

import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { login } from "../lib/firebase";
import useStore from "../lib/state";

const Login = () => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const history = useHistory();

  if (isAuthenticated) {
    history.push("/");
  }

  const handleClick = () => {
    login();
  };

  return (
    <div className="my-4 d-flex align-items-center justify-content-center">
      <Card bg="dark" text="white" style={{ width: "18rem" }} className="mb-2">
        <Card.Body className="text-center">
          <Card.Title className="mb-3">Log In</Card.Title>
          <Button onClick={handleClick} variant="primary" className="m-2">
            Sign in with Google
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
