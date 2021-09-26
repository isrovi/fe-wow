import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Email from "../assets/images/email.png";
import Gender from "../assets/images/gender.png";
import Phone from "../assets/images/phone.png";
import Map from "../assets/images/map.png";
import Profil from "../assets/images/profile.png";
import Tess from "../assets/images/tess.png"

export default function Profile() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col
            md={9}
            className="d-flex flex-column my-4"
            style={{ marginLeft: "-40px" }}
          >
            <h2>Profile</h2>
            <div
              className="mt-4 p-5 d-flex flex-row justify-content-between"
              style={{
                width: "995px",
                height: "334px",
                background: "#FFD9D9",
                borderRadius: "8px",
              }}
            >
              <div>
                <div
                  style={{ height: "50px" }}
                  className="mt-2 d-flex align-items-center"
                >
                  <img src={Email} alt="" />
                  <div style={{ marginTop: "6px", marginLeft: "15px" }}>
                    <span>egigans@gmail.com</span>
                    <p>Email</p>
                  </div>
                </div>
                <div
                  style={{ height: "50px" }}
                  className="mt-2 d-flex align-items-center"
                >
                  <img src={Phone} alt="" />
                  <div style={{ marginTop: "6px", marginLeft: "15px" }}>
                    <span>Mail</span>
                    <p>Gender</p>
                  </div>
                </div>
                <div
                  style={{ height: "50px" }}
                  className="mt-2 d-flex align-items-center"
                >
                  <img src={Phone} alt="" />
                  <div style={{ marginTop: "6px", marginLeft: "15px" }}>
                    <span>0812-8623-8911</span>
                    <p>Mobile Phone</p>
                  </div>
                </div>
                <div
                  style={{ height: "50px" }}
                  className="mt-2 d-flex align-items-center"
                >
                  <img src={Map} alt="" />
                  <div style={{ marginTop: "6px", marginLeft: "15px" }}>
                    <span>Perumahan Permata Bintaro Residence C-3</span>
                    <p>Address</p>
                  </div>
                </div>
              </div>
              <div className="flex-column">
                <img src={Profil} alt="" />
                <div className="text-center">
                  <button
                    className="mt-2"
                    style={{
                      width: "100%",
                      height: "50px",
                      background: "#D60000",
                      borderRadius: "5px",
                    }}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="mb-5">My List Book</h2>
              <div style={{ width: "200px"}}>
              <img src={Tess} />
              <h5 className="mt-2">Tess on the Road</h5>
              <p className="mt-2">Rachel Hartman</p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
