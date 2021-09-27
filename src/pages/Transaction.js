import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Wow from "../assets/images/bitwow.png";
import Drop from "../assets/images/drop.png";
import User from "../assets/images/usernav.png";
import Add from "../assets/images/addbook.png";
import Logout from "../assets/images/redlogout.png";
import { Nav, NavDropdown } from "react-bootstrap";

export default function Transaction() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5">
            <Nav
              sticky="top"
              className="d-flex justify-content-between"
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
            <div className="m-5">
              <h1 className="my-5">Incoming Transaction</h1>
              <Table striped borderless hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Users</th>
                    <th>Bukti Transfer</th>
                    <th>Remaining Active</th>
                    <th>Status User</th>
                    <th>Status Payment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Radif Ganteng</td>
                    <td>bca.jpg</td>
                    <td>26 / Hari</td>
                    <td>Active</td>
                    <td>Approve</td>
                    <td>
                      <img src={Drop} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Haris Rahman</td>
                    <td>bni.jpg</td>
                    <td>26 / Hari</td>
                    <td>Active</td>
                    <td>Approve</td>
                    <td className>
                      <img src={Drop} alt="" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
