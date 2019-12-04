import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';

import logo from "../static/img/spooky.svg"

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Mi portafolio
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="nav-link"  to="/">Home</Link>
            <Link className="nav-link"  to="/projects">Projects</Link>
            <Link className="nav-link"  to="/contact">Contact</Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
