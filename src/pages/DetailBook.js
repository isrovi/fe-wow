import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import BigBook from "../assets/images/bigbook.png";
import Bookmark from "../assets/images/bookmark.png";
import Next from "../assets/images/next.png";

export default function DetailBook() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9} style={{marginLeft: "-30px"}}>
            <div className="d-flex flex-row mt-5">
              <img src={BigBook} alt="" />
              <div className="ms-5 d-flex flex-column justify-content-between">
                <div>
                  <h1 style={{ fontSize: "64px" }}>Tess on the Road</h1>
                  <p style={{ fontSize: "24px" }}>Rachel Hartman</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "24px" }}>Publication Date</h3>
                  <p style={{ fontSize: "18px" }}>April 2020</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "24px" }}>Pages</h3>
                  <p style={{ fontSize: "18px" }}>436</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "24px" }}>ISBN</h3>
                  <p style={{ fontSize: "18px" }}>9781789807554</p>
                </div>
              </div>
            </div>
            <h2 className="mt-5 mb-3" style={{fontSize:"36px"}}>About This Book</h2>
            <div className="me-4" style={{textAlign:"justify"}}>
              <p style={{fontSize: "18px"}}>
                In the medieval kingdom of Goredd, women are expected to be
                ladies, men are their protectors, and dragons get to be whomever
                they want. Tess, stubbornly, is a troublemaker. You can’t make a
                scene at your sister’s wedding and break a relative’s nose with
                one punch (no matter how pompous he is) and not suffer the
                consequences. As her family plans to send her to a nunnery, Tess
                yanks on her boots and sets out on a journey across the
                Southlands, alone and pretending to be a boy.<br /><br /> Where Tess is
                headed is a mystery, even to her. So when she runs into an old
                friend, it’s a stroke of luck. This friend is a quigutl—a
                subspecies of dragon—who gives her both a purpose and protection
                on the road. But Tess is guarding a troubling secret. Her
                tumultuous past is a heavy burden to carry, and the memories
                she’s tried to forget threaten to expose her to the world in
                more ways than one.<br /><br /> Returning to the fascinating world she
                created in the award-winning and New York Times bestselling
                Seraphina, Rachel Hartman introduces readers to a new character
                and a new quest, pushing the boundaries of genre once again in
                this wholly original fantasy.
              </p>
            </div>
            <div className="d-flex align-items-end justify-content-end">
              <div className="mb-5">
              <Button className="me-4" variant="danger">Add My List <img src={Bookmark} alt="" /></Button>
              <Button variant="secondary">Read Book <img src={Next} alt="" /></Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
