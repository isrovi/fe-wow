import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Wow from "../assets/images/bitwow.png";
import Drop from "../assets/images/drop.png"

export default function Transaction() {
  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5">
            <img sticky="top" src={Wow} alt="" />
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
                    <td>@26 / Hari</td>
                    <td>Active</td>
                    <td>Approve</td>
                    <td><img src={Drop} alt="" /></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Haris Rahman</td>
                    <td>bni.jpg</td>
                    <td>26 / Hari</td>
                    <td>Active</td>
                    <td>Approve</td>
                    <td className><img src={Drop} alt="" /></td>
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
