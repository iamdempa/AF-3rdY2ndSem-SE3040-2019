import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axio from "axios";

export default class AddAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignmentName: "",
      assignmentDescription: "",
      courseName: "",
      assignmentDueDate: new Date(),
      isNewAssignment: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.assignmentNameOnChange = this.assignmentNameOnChange.bind(this);
    this.assignmentDescriptionOnChange = this.assignmentDescriptionOnChange.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(date) {
    let today = date;

    /* let datee =
      parseInt(today.getMonth() + 1) +
      "/" +
      today.getDate() +
      "/" +
      today.getFullYear();

    var dateString = datee; // Oct 23

    var dateObject = new Date(dateString); */

    this.setState({
      assignmentDueDate: date
    });
  }

  assignmentNameOnChange(e) {
    this.setState({
      assignmentName: e.target.value
    });
  }
  assignmentDescriptionOnChange(e) {
    this.setState({
      assignmentDescription: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const newAssignment = {
      assignmentName: this.state.assignmentName,
      assignmentDescription: this.state.assignmentDescription,
      courseName: this.state.courseName,
      assignmentDueDate: this.state.assignmentDueDate,
      isNewAssignment: !this.state.isNewAssignment
    };

    
    axio
      .post("http://localhost:4000/courseweb/assignment/add", newAssignment)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    alert('Assignment Added!');
    this.setState({
      assignmentName: "",
      assignmentDescription: "",
      courseName: "",
      assignmentDueDate: new Date(),
      isNewAssignment: false
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
            <li className="breadcrumb-item active">Add Assignment</li>
          </ol>

          <h1>Add Assignments</h1>
          <hr />
          <p>Add new Assignement to a course</p>
          <br />

          <div className="container">
            <div className="row">
              <div className="col-2" />
              <div className="col-8">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Assignment Name:</label>
                    <input
                      value={this.state.assignmentName}
                      onChange={this.assignmentNameOnChange}
                      type="text"
                      className="form-control"
                      placeholder="Final AF Project - 2019"
                    />
                  </div>

                  <div className="form-group">
                    <label>Assignment Description:</label>
                    <textarea
                      value={this.state.assignmentDescription}
                      onChange={this.assignmentDescriptionOnChange}
                      type="text"
                      className="form-control"
                      placeholder="Enter description"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Explain what students must do in this Assignement.
                    </small>
                  </div>

                  <div className="form-group">
                    <label>Due Date:</label>{" "}
                    <DatePicker
                      className="form-control"
                      selected={this.state.assignmentDueDate}
                      onChange={this.handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
