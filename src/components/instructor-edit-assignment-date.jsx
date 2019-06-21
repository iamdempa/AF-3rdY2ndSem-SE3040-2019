import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axio from "axios";

export default class EditAssignmentDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignmentName: "",
      assignmentDescription: "",
      courseName: "",
      assignmentDueDate: new Date(),
      isNewAssignment: false,
      originalDueDate: new Date(),
      message: "",
      red: "red",
      green: "green",
      color: ""
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
    console.log("Component did mount");

    axio
      .get(
        "http://localhost:4000/courseweb/assignments/update/" +
          this.props.match.params.assignmentID
      )
      .then(res => {
        let today = new Date(res.data.assignmentDueDate);

        let datee =
          parseInt(today.getMonth() + 1) +
          "/" +
          today.getDate() +
          "/" +
          today.getFullYear();

        var dateString = datee; // 6/24/2019
        this.setState({
          assignmentName: res.data.assignmentName,
          assignmentDescription: res.data.assignmentDescription,
          courseName: res.data.courseName,
          assignmentDueDate: new Date(dateString), //Sat Jun 24 2019 03:59:53 GMT+0530 (India Standard Time)
          isNewAssignment: res.data.isNewAssignment,
          originalDueDate: new Date(dateString)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      assignmentName: this.state.assignmentName,
      assignmentDescription: this.state.assignmentDescription,
      courseName: this.state.courseName,
      assignmentDueDate: this.state.assignmentDueDate,
      isNewAssignment: this.state.isNewAssignment
    };

    let originalDueDate = this.state.originalDueDate;
    let newDueDate = this.state.assignmentDueDate;

    if (newDueDate < originalDueDate) {
      this.setState({
        message: "Select only a later date",
        color: this.state.red,
        assignmentDueDate: this.state.originalDueDate
      });
    } else {
      
      axio
        .post(
          "http://localhost:4000/courseweb/assignments/update/date/" +
            this.props.match.params.assignmentID,
          obj
        )
        .then(res => {
          console.log(res.data);
          this.setState({
            message: "Due  date updated",
            color: this.state.green
          });
          setTimeout("location.reload(true);", 2000);
        });
    }
  }

  render() {
    return (
      <div className="container">
        <br />
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href={`/instructor/${this.props.username}/assignments/update`}>
              Back
            </a>
          </li>
          <li className="breadcrumb-item active">Update Assignment due date</li>
        </ol>

        <h1>Edit Assignment Date {this.props.match.params.assignmentID}</h1>
        <br />

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Due Date:</label>{" "}
            <DatePicker
              className="form-control"
              selected={this.state.assignmentDueDate}
              onChange={this.handleChange}
            />
            <small className="form-text text-muted">
              Select only to a later date than the original one
            </small>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-info">
              <i className="fa fa-upload" /> Update Due Date
            </button>

            <p
              style={{
                color: `${this.state.color}`,
                marginTop: 10,
                fontSize: 25
              }}
            >
              {this.state.message}
            </p>
          </div>
        </form>
      </div>
    );
  }
}
