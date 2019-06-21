import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axio from "axios";

export default class AllAssignments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignmentDueDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      assignmentDueDate: date
    });
  }

  componentDidMount() {
    axio
      .get("http://localhost:4000/courseweb/assignments/:assignmentID")
      .then(res => {
          
      })
      .catch(err => {});
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h1>Edit Assignment Date {this.props.match.params.assignmentID}</h1>
        <br />
        <form>
          <div className="form-group">
            <label>Due Date:</label>{" "}
            <DatePicker
              className="form-control"
              selected={this.state.assignmentDueDate}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
