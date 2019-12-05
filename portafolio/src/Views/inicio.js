import React, { Component } from "react";
import img2 from "../static/img/images/Group171.svg"
import img3 from "../static/img/images/Group12.svg"
export default class Inicio extends Component {
  render() {
    return (
      <div>
        <div class="banner">
          <div class="container">
            <h1 class="font-weight-semibold">
              Las mejores pupusas de El Salvador
            </h1>
            <h6 class="font-weight-normal text-muted pb-3">
              Mejores que las de olocuilta
            </h6>
            <div>
              <button class="btn btn-opacity-light mr-1">
                Mira nuestro menu
              </button>
              <button class="btn btn-opacity-success ml-1">
                Has pedidos por whatsapp
              </button>
            </div>
            <img src={img2} alt="" class="img-fluid mt-5" />
            <section class="features-overview" id="features-section" >
            <div class="content-header">
            <h2>How does it works</h2>
            <h6 class="section-subtitle text-muted">One theme that serves as an easy-to-use operational toolkit<br/>that meets customer's needs.</h6>
            </div>
            <div class="d-md-flex justify-content-between">
          <div class="grid-margin d-flex justify-content-start">
            <div class="features-width">
              <img src={img3}alt="" class="img-icons"/>
              <h5 class="py-3">Speed<br/>Optimisation</h5>
              <p class="text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
              <a href="#"><p class="readmore-link">Readmore</p></a>  
            </div>
          </div>
          <div class="grid-margin d-flex justify-content-center">
            <div class="features-width">
              <img src="images/Group7.svg" alt="" class="img-icons"/>
              <h5 class="py-3">SEO and<br/>Backlinks</h5>
              <p class="text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
              <a href="#"><p class="readmore-link">Readmore</p></a>
            </div>
          </div>
          <div class="grid-margin d-flex justify-content-end">
            <div class="features-width">
              <img src="images/Group5.svg" alt="" class="img-icons"/>
              <h5 class="py-3">Content<br/>Marketing</h5>
              <p class="text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
              <a href="#"><p class="readmore-link">Readmore</p></a>
            </div>
          </div>
        </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
