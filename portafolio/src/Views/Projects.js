import React, { Component } from "react";

import CardProject from "../Components/CardProject"

export default class Projects extends Component {
  render() {
    return (
      <section className="case-studies container mt-5" id="case-studies-section">
        <div class="row grid-margin">
          <div class="col-12 text-center pb-5">
            <h2>Latest Projects</h2>
            <h6 class="section-subtitle text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum.</h6>
          </div>
          <CardProject title="Pagina web Coca cola" clases='text-center card-contents bg-primary'/>
          <CardProject title="Pagina web GOB" clases='text-center card-contents bg-warning'/>
          <CardProject title="Diseño grafico de un libro" clases='text-center card-contents bg-success'/>
          <CardProject title="app movil" clases='text-center card-contents bg-danger'/>
        </div>
      </section>   
    );
  }
}
