import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import InstructorProfileHome from "./instructor-profile-home";
import AcceptCourses from './instructor-accept-courses';

export default class InstructorProfile extends Component {
  constructor(props) {
    super(props);
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
            <i className="fa fa-bars" />
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
              <Link className="nav-link" to={`/instructor/${username}/accept/course`}>
                <i className="fa fa-check" />
                <span> Accept Courses</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-plus" />
                <span> Add Assignment</span>
              </a>
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
              render={props =>
              <AcceptCourses 
              {...props}           
              username={username}
              />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
