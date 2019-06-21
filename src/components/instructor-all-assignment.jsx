import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import axio from "axios";

const ShowAssignments = props => (
  <tr>
    <td>{props.assignment.assignmentName}</td>
    <td>{props.assignment.assignmentDescription}</td>
    <td>{props.assignment.courseName}</td>
    <td>
      <Link
        to={`/instructor/IT17157124/assignments/update/${props.assignment._id}`}
      >
        {props.convertedDate}
      </Link>
    </td>
  </tr>
);

export default class AllAssignments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignmentName: "",
      assignmentDescription: "",
      courseName: "",
      assignmentDueDate: "",
      allAssignments: []
    };
  }

  convertDateToString(date) {
    let today = new Date(date);

    let datee =
      parseInt(today.getMonth() + 1) +
      "/" +
      today.getDate() +
      "/" +
      today.getFullYear();

    var dateString = datee; // Oct 23
    return dateString;

    // var dateObject = new Date(dateString);
  }

  componentDidMount() {
    axio
      .get("http://localhost:4000/courseweb/assignments")
      .then(res => {
        this.setState({
          allAssignments: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getRows() {
    if (!this.state.allAssignments && !this.state.allAssignments.length)
      return null;
    return this.state.allAssignments.map((currentAssignment, id) => {
      return (
        <ShowAssignments
          assignment={currentAssignment}
          key={id}
          convertedDate={this.convertDateToString(
            currentAssignment.assignmentDueDate
          )}
        />
      );
    });
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
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Assignment Name</th>
                <th>Assignment Description</th>
                <th>Course Name</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>{this.getRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
