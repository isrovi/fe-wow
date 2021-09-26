import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Serangkai from "../assets/images/serangkai.png";
import contentData from "../fakeData/contentData";
import CardBook from "./CardBook";
import BigCard from "../assets/images/bigcard.png";

export default function ListBook() {
  return (
    <Container fluid>
      <Row>
      <div style={{marginLeft: "-70px"}} className="mt-5"><img src={BigCard} alt="" /></div>
        <Col className="d-flex flex-column" style={{ marginLeft: "-70px", }}>
          <h1>List Book</h1>
          <Row className="justify-content-between my-4" style={{width: "990px"}}>
            <div style={{ width: "200px"}}>
              <img src={Serangkai} />
              <h5 className="mt-2">Serangkai</h5>
              <p className="mt-2">Valerie Patkar</p>
            </div>
            <div style={{ width: "200px" }}>
              <img src={Serangkai} />
              <h5 className="mt-2">Serangkai</h5>
              <p className="mt-2">Valerie Patkar</p>
            </div>
            <div style={{ width: "200px" }}>
              <img src={Serangkai} />
              <h5 className="mt-2">Serangkai</h5>
              <p className="mt-2">Valerie Patkar</p>
            </div>
            <div style={{ width: "200px" }}>
              <img src={Serangkai} />
              <h5 className="mt-2">Serangkai</h5>
              <p className="mt-2">Valerie Patkar</p>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
