import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axio from "axios";

export default class AllAssignments extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href={`/instructor/${this.props.username}`}>Home</a>
            </li>
            <li className="breadcrumb-item active">Update Assignment</li>
          </ol>

          <h1>Update Assignments</h1>
          <hr />
          <p>Update due dates of Assignments</p>
          <br />
        </div>
      </div>
    );
  }
}
