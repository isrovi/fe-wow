import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ModalSignUp from "./components/ModalSignUp";
import ModalSignIn from "./components/ModalSignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import logo from "./assets/images/icon.png";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  
  return (
    <>
      <Container fluid className="bg">
       
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
            <Button id="signup" variant="flat" className="btn-signup my-5 me-4" size="lg" onClick={() => setModalShow(true)}>
              Sign Up
            </Button>      
            <Button id="signin" variant="flat" className="btn-signin " size="lg" onClick={() => setModalShow2(true)}>
              Sign In
            </Button>
         
            <ModalSignUp 
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <ModalSignIn
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
