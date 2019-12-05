import React, { Component } from "react";

import "./css/cardProject.css"
import img from "../static/img/images/Group95.svg"
export default class CardProject extends Component {
  
  render() {
    return (
      <div class="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0" data-aos="zoom-in">
            <div class="card color-cards">
              <div class="card-body p-0">
                <div className={this.props.clases}>
                  <div class="card-image">
                    <img src={img} class="case-studies-card-img" alt=""/>
                  </div>  
                  <div class="card-desc-box d-flex align-items-center justify-content-around">
                    <div>
                      <h6 class="text-white pb-2 px-3">{this.props.title}</h6>
                      <button class="btn btn-white">Read More</button>
                    </div>
                  </div>
                </div>   
                <div class="card-details text-center pt-4">
                    <h6 class="m-0 pb-1">{this.props.title}</h6>
                    <p>Frederick Mejia</p>
                </div>
              </div>
            </div>
          </div>
          
          
    );
  }
}
