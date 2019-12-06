import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form>
              <div class="form-group">
                <label for="formGroupExampleInput">Example label</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Example input"
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2">Another label</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Another input"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
