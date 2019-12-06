import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
              <h1>Contact Us!</h1>
            <form className="mt-3">
              <div class="form-group">
                <label for="formGroupExampleInput">Your Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Example input"
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2">Your Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="example@mail.com"
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2">Your Message</label>
                <textarea
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Message"
                  rows="5"
                />
              </div>
              <button className="btn btn-primary">Send!</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
