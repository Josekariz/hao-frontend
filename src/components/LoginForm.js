import React from "react";
import { Form, Button,} from "react-bootstrap";
// import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

// import "../Assets/css/login.scss";

function LoginForm() {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div>
      <p>Member Access</p>
      <p className="header-1">Login To Jumba</p>
      <p>
        Don’t have an account? Register{" "}
        <span>
          <a href="/register">Here</a>
        </span>
      </p>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="example@email.com" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="at least 4 characters strong"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me?" />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-block">
          Login
        </Button>
        <br />
        {/* <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          className="google-login-button"
          buttonText="Sign in with Google"
          onSuccess={true}
          onFailure={true}
          cookiePolicy={"single_host_origin"}
        /> */}

        <div className="forgot-pass">
          <a href="\">Forgot your password?</a>
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;
