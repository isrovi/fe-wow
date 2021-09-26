import React from "react";
import Sidebar from "../components/Sidebar";
import ListBook from "../components/ListBook";
import Logo from "../assets/images/logo.png";
import Profil from "../assets/images/profil.png";

import BigCard from "../assets/images/bigcard.png";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>

        <Col md={8}>
          <div style={{marginLeft: "-70px"}} className="mt-5"><img src={BigCard} alt="" /></div>
          <ListBook />
        </Col>
      </Row>
    </Container>
  );
}
