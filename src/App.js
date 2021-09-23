import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import logo from "./assets/images/icon.png";

function App() {
  return (
    <>
      <Container fluid className="bg">
        <Row>
          <Col md={6}></Col>
        </Row>
        <Row>
          <Col className="pt-5" md={{ offset: 1 }}>
            <img src={logo} alt="" />
          </Col>
        </Row>
        <Row className="ps-4">
          <Col md={{ offset: 1 }}>
            <p className="p-app mt-3 pe-3">
              Sign-up now and subscribe to enjoy all the cool and latest books -
              The best book rental service provider in Indonesia
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row className="ps-4">
          <Col md={{ offset: 1 }}>
            <Button variant="flat" className="btn-signup my-5 me-4" size="lg">
              Sign Up
            </Button>
            <Button variant="flat" className="btn-signin " size="lg">
              Sign In
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
