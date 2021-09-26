import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Nav,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Logo from "../assets/images/logo.png";
import Profil from "../assets/images/profil.png";
import User from "../assets/images/user.png";
import Bill from "../assets/images/bill.png";
import Logout from "../assets/images/logout.png";

import Subscribe from "./Subscribe";

export default function Sidebar() {
  return (
    <Router>
      <Nav className={`${styles.Sidebar} ${"d-flex flex-column m-4 justify-content-center align-items-center"}`} as="ul">
        
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
          <Nav.Item as="li">
            <Nav.Link>
              <img src={User} alt="" />
              <span className="ms-2" style={{ fontSize: "25px" }}>
                Profile
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to="/subscribe">
              <img src={Bill} alt="" />
              <span style={{ fontSize: "25px", marginLeft: "10px" }}>
                Subscribe
              </span>
              
            </NavLink>
            <hr />
          </Nav.Item>
          
          <Nav.Item as="li">
            <Nav.Link>
              <img src={Logout} alt="" />
              <span style={{ fontSize: "25px", marginLeft: "10px" }}>
                Logout
              </span>
            </Nav.Link>
          </Nav.Item>
      </Nav>

      <Switch>
        <Route exact path="/home"></Route>
      </Switch>
    </Router>
  );
}
