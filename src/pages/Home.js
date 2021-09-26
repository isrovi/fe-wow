import React from "react";
import Sidebar from "../components/Sidebar";
import ListBook from "../components/ListBook";
import { Container, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <Route exact path="/home" component={ListBook} />
         
        </Col>
      </Row>
    </Container>
  );
}
