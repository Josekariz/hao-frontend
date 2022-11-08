import React from "react";
import LoginForm from "../components/LoginForm";
// import {Container, Row, Col } from "react-bootstrap"
// import "../Assets/css/main.scss";

function Login() {
    return (
      <>
            <h1>HAO</h1>
            <div className="login-form h-100 d-flex justify-content-center align-items-center">
              <LoginForm />
            </div>
      </>
    );
  }
  
  export default Login;