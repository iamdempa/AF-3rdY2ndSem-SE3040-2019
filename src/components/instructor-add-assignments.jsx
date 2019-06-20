import React, { Component } from "react";

export default class AddAssignment extends Component {
  render() {      
    return (
      <div id="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href={`/instructor/${this.props.username}`}>Home</a>
            </li>
            <li className="breadcrumb-item active">Add Assignment</li>
          </ol>

          <h1>Add Assignments</h1>
          <hr />
          <p>This is a great starting point for new custom pages.</p>
        </div>
      </div>
    );
  }
}
