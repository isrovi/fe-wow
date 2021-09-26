import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Wow from "../assets/images/wow.png";
import Upload from "../assets/images/upload.png";

export default function Subscribe() {
  return (
    <>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ marginLeft: "-40px", marginTop: "170px" }}
      >
        <h1 className="fw-bold">Premium</h1>

        <p className="mt-4">
          Pay now and access all the latest books from{" "}
          <img src={Wow} alt="WOW" />
        </p>

        <p className="fw-bold mt-4">
          <img src={Wow} alt="WOW" /> : 0981312323
        </p>

        <Form>
          <Form.Group className="mb-3 mt-4">
            <Form.Control
              style={{ width: "350px", height: "50px", borderRadius: "5px" }}
              type="number"
              className=""
              placeholder="Input your account number"
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label
              style={{
                padding: "10px",
                border: "1px solid black",
                width: "350px",
                height: "50px",
                borderRadius: "5px",
              }}
              className="fw-bold "
            >
              Attache proof of transfer <img src={Upload} alt="icon" />
            </Form.Label>
            <Form.Control type="file" hidden />
          </Form.Group>

          <Button style={{ width: "350px", height: "40px" }} variant="danger">
            Send
          </Button>
        </Form>
      </Container>
    </>
  );
}
