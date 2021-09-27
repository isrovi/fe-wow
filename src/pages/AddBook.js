import React from "react";
import { Container, Row, Col, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import Wow from "../assets/images/bitwow.png";
import Drop from "../assets/images/drop.png";
import User from "../assets/images/usernav.png";
import Add from "../assets/images/addbook.png";
import Logout from "../assets/images/redlogout.png";
import Attach from "../assets/images/attach.png";
import Addico from "../assets/images/add.png";

export default function AddBook() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Nav
              sticky="top"
              className="d-flex justify-content-between my-4"
              activeKey="1"
              onSelect={handleSelect}
            >
              <Nav.Item>
                <Nav.Link eventKey="1" href="/home">
                  <img src={Wow} alt="" />
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title={<img src={User} alt="" />} id="nav-dropdown">
                <NavDropdown.Item>
                  <img
                    className="me-2"
                    style={{ fontSize: "24px" }}
                    src={Add}
                    alt=""
                  />
                  <span>Add Book</span>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <img
                    className="me-2"
                    style={{ fontSize: "24px" }}
                    src={Logout}
                    alt=""
                  />
                  <span>Logout</span>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <h1>Add Book</h1>
            <Form style={{height:"600px", width:"995px"}} className="m-5 d-flex flex-column justify-content-between">
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Group controlId="date">
                <Form.Control type="date" />
              </Form.Group>
              <Form.Control type="number" placeholder="Pages" />
              <Form.Control type="text" placeholder="Author" />
              <Form.Control type="text" placeholder="ISBN" />
              <Form.Control style={{heigth:"207px"}} as="textarea" placeholder="About This Book" />
              <div>
                  <Button variant="flat" style={{border: "1px solid black"}}>
                <input type="file" name="uploadfile" hidden/>
                <label for="img">Attache proof of transfer</label>
                <img src={Attach} style={{ fontSize: "2rem" }} />
                </Button>
              </div>
              <div className="d-flex flex-column justify-content-end align-items-end">
                <div>
                  <Button variant="danger">
                    Add Book <img src={Addico} alt="" />
                  </Button>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
