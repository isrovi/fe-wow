import React from "react";
import { Form, Modal, Button, FloatingLabel } from "react-bootstrap";
import styles from "./ModalSignUp.module.css";

export default function ModalSignUp(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={styles.modalContainer}
    >
      <Modal.Title className="p-4" id="contained-modal-title-vcenter">
        Sign Up
      </Modal.Title>
      <Modal.Body className="show-grid p-4 d-grid gap-2">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Full Name"
          className="mb-4"
        >
          <Form.Control type="text" placeholder="Full Name" />
        </FloatingLabel>
        <Button variant="flat" className={styles.btnSignup}>
          Sign Up
        </Button>
        <p className="text-center">Already have an account ? Klik Here</p>
      </Modal.Body>
    </Modal>
  );
}
