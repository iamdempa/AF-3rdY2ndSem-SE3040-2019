import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axio from "axios";

export default class EditAssignmentDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignmentDueDate: new Date(),
      assignmentObject: []
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

        var dateString = datee;
        this.setState({
            assignmentDueDate: new Date(dateString)
        });
      })
      .catch(err => {
        console.log(err);
      });
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
