import React from "react";

// Bootstrap Components
import { Card, Button } from "react-bootstrap";

// Helper Methods
import { login } from "../lib/firebase";

const Login = () => {
  return (
    <div className="my-4 d-flex align-items-center justify-content-center">
      <Card bg="dark" text="white" style={{ width: "18rem" }} className="mb-2">
        <Card.Body className="text-center">
          <Card.Title className="mb-3">Log In</Card.Title>
          <Button onClick={login} variant="primary" className="m-2">
            Sign in with Google
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
