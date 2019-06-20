import React, { Component } from "react";

export default class InstructorProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <a className="navbar-brand mr-1" href="index.html">
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
              <a className="nav-link" href="#">
                <i className="fa fa-home" />
                <span> Profile</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-check" />
                <span> Accept Courses</span>
              </a>
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

          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Blank Page</li>
              </ol>

              <h1>Blank Page</h1>
              <hr />
              <p>This is a great starting point for new custom pages.</p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
