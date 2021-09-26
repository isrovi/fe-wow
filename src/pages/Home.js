import React from "react";
import Sidebar from "../components/Sidebar";
import ListBook from "../components/ListBook";
import Logo from "../assets/images/logo.png";
import Profil from "../assets/images/profil.png";
import Subscribe from "../components/Subscribe";
import BigCard from "../assets/images/bigcard.png";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { Route } from "react-router-dom";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>

        <Col md={8}>
          <Route exact path="/home" component={ListBook}/>
          <Route exact path="/subscribe" component={Subscribe}></Route>
        </Col>
      </Row>
    </Container>
  );
}
