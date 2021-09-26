import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import styles from "./Sidebar.module.css";
import Logo from "../assets/images/logo.png";
import Profil from "../assets/images/profil.png";
import User from "../assets/images/user.png";
import Bill from "../assets/images/bill.png";
import Logout from "../assets/images/logout.png";

export default function Sidebar() {
  return (
    <Router>
      <Nav className={`${styles.Sidebar} ${"mh-100 flex-column m-4 justify-content-center align-items-center"}`} as="ul">
        <div className="">
          <Nav.Item as="li">
            <Nav.Link>
              <img src={Logo} alt="" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>
              <img src={Profil} alt="" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>
              <span style={{ fontSize: "24px" }}>Egi Ganteng</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>
              <span style={{ fontSize: "18px" }}>Not Subscribed Yet</span>
            </Nav.Link>
          </Nav.Item>
          <hr />
        </div>
        
        <div>
          <Nav.Item as="li">
            <Nav.Link>
              <img src={User} alt="" />
              <span className="ms-2" style={{ fontSize: "25px" }}>
                Profile
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>
              <img src={Bill} alt="" />
              <span style={{ fontSize: "25px", marginLeft: "10px" }}>
                Subscribe
              </span>
            </Nav.Link>
          </Nav.Item>
          <hr />
          <Nav.Item as="li">
            <Nav.Link>
              <img src={Logout} alt="" />
              <span style={{ fontSize: "25px", marginLeft: "10px" }}>
                Logout
              </span>
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>

      <Switch>
        <Route exact path="/"></Route>
        <Route path="/about-us"></Route>
        <Route path="/contact-us"></Route>
      </Switch>
    </Router>
  );
}
