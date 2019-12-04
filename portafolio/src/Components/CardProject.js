import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import logo from "../static/img/spooky.svg";

import "./css/cardProject.css"
export default class CardProject extends Component {
  
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{this.props.titulo}</Card.Title>
          <Card.Text>{this.props.descrip}</Card.Text>
          <Button variant="primary">Demo!</Button>
        </Card.Body>
      </Card>
    );
  }
}
