import React from "react";
import BookSlide from "../assets/images/readbook.png";
import Wow from "../assets/images/bitwow.png";
import { Container, Row, Col } from "react-bootstrap";

export default function ReadBook() {
  return (
    <>
      <Container fluid className="mx-5">
        <Row>
          <Col>
            <img className="m-5" src={Wow} alt="" />
            <div className="mb-5 ">
              <img style={{ width: "90vw" }} src={BookSlide} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
