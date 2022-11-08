import React from "react";
import LoginForm from "../components/LoginForm";
import {Container, Row, Col } from "react-bootstrap"

function Login() {
    return (
      <>
      <Container fluid>
        <Row classsname="d-flex justify-content-between">
          <Col lg={7} className="login-left">
            <h1>HAO</h1>
            <div className="login-form h-100 d-flex justify-content-center align-items-center">
              <LoginForm />
            </div>
          </Col>
          <Col lg={5} className="login-right"></Col>
        </Row>
      </Container>
      </>
    );
  }
  
  export default Login;