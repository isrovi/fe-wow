import React from "react";
import { Form, Modal, Button, FloatingLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from "./ModalSignIn.module.css";

export default function ModalSignIn(props) {
    const history = useHistory();
    function handleClick(path) {
    history.push(path);
  }
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={styles.modalContainer}
    >
      <Modal.Title className="p-4" id="contained-modal-title-vcenter">
        Sign In
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
          className="mb-4"
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button variant="flat" className={styles.btnContainer}>
          Sign In
        </Button>
        <p className="text-center align-items-center">Don't have an account ? Klik Here</p>
      </Modal.Body>
    </Modal>
  );
}
