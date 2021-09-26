import React from "react";
import Sidebar from "../components/Sidebar";
import ListBook from "../components/ListBook";
import Subscribe from "../components/Subscribe";
import Profile from "./Profile";
import { Container, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <Route exact path="/home" component={ListBook} />
          <Route exact path="/subscribe" component={Subscribe} />
          <Route exact path="/profile" component={Profile} />
        </Col>
      </Row>
    </Container>
  );
}
