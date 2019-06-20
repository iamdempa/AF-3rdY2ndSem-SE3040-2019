import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axio from "axios";

import InstructorProfileHome from "./instructor-profile-home";
import AcceptCourses from "./instructor-accept-courses";
import AddAssignments from "./instructor-add-assignments";
import AllAssignments from "./instructor-all-assignment";

export default class InstructorProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coursesToAccept: 0
    };
  }

  componentDidMount() {
    axio.get("http://localhost:4000/courseweb/courses").then(res => {
      this.setState({
        coursesToAccept: res.data
      });
    });
  }

  getCount() {
    if (this.state.coursesToAccept <= 0) {
      return 0;
    } else {
      if (this.state.coursesToAccept < 10) {
        return "0" + this.state.coursesToAccept;
      } else {
        return this.state.coursesToAccept;
      }
    }
  }

  render() {
    let username = this.props.match.params.username;
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <a className="navbar-brand mr-1" href={`/instructor/${username}`}>
            W.W Coders | {this.props.match.params.username}
          </a>

          <button
            className="btn btn-link btn-sm text-white order-1 order-sm-0"
            id="sidebarToggle"
            href="#"
          >
            {/* <i className="fa fa-bars" /> */}
          </button>

          <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group">
              <button className="btn btn-info">
                Logout <i className="fa fa-sign-out" />
              </button>
            </div>
          </form>
        </nav>

        <div id="wrapper">
          <ul className="sidebar navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={`/instructor/${username}`}>
                <i className="fa fa-home" />
                <span> Profile</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link dropdown"
                to={`/instructor/${username}/accept/course`}
              >
                <i className="fa fa-check" />
                <span> Accept Courses </span>
                <i className="fa fa-bell" />
                <span className="badge badge-danger" style={{ fontSize: 12 }}>
                  {this.getCount()}
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/instructor/${username}/assignment/add`}
              >
                <i className="fa fa-plus" />
                <span> Add Assignement</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/instructor/${username}/assignments/update`}
              >
                <i className="fa fa-pencil" />
                <span> Update Assignement</span>
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-plus" />
                <span> Add Exam</span>
              </a>
            </li>
          </ul>

          <Switch>
            <Route
              exact
              path={`/instructor/${username}`}
              render={props => <InstructorProfileHome {...props} />}
            />

            <Route
              path={`/instructor/${username}/accept/course`}
              render={props => <AcceptCourses {...props} username={username} />}
            />

            <Route
              path={`/instructor/${username}/assignment/add`}
              render={props => (
                <AddAssignments {...props} username={username} />
              )}
            />

          

            <Route
              path={`/instructor/${username}/assignments/update`}
              render={props => (
                <AllAssignments {...props} username={username} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
