import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import axio from "axios";

export default class AllAssignments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Edit Assignment Date {this.props.match.params.assignmentID}</h1>
      </div>
    );
  }
}
