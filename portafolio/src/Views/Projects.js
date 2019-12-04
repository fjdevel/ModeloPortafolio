import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import logo from "../static/img/spooky.svg";

export default class Projects extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Mi primer proyecto</Card.Title>
                <Card.Text>
                  este es la descripcion de mi primer proyecto
                </Card.Text>
                <Button variant="primary">Demo!</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
