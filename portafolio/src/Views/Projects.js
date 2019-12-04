import React, { Component } from "react";

import CardProject from "../Components/CardProject"

export default class Projects extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <CardProject titulo="este es el titulo" descrip="esta es la descripcion"/>
          </div>
          <div className="col-md-4">
            <CardProject titulo="mi segundo proyecto" descrip="esta es la descripcion"/>
          </div>
          <div className="col-md-4">
            <CardProject titulo="mi tercer proyecto" descrip="esta es la descripcion"/>
          </div>
        </div>
      </div>
    );
  }
}
