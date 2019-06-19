import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import CarouselCardParagraph from "./components/index-CarouselCardsParagraphFooter";
import InstructorLoginForm from "./components/instructor-login-form";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginClicked: false
    };
  }

 
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="/">
                    <img src="http://placehold.it/50x40?" alt="" />
                  </a>
                </li>
                <li className="nav-item active" style={{ marginLeft: 10 }}>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item" style={{ marginLeft: 10 }}>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    {" "}
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto order-0">
              {/* <a className="navbar-brand mx-auto" href="#">
            Navbar 2
          </a> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target=".dual-collapse2"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link                                     
                    to="/login"
                    className="btn btn-info btn-sm"
                  >
                    {" "}
                    Login <i className="fa fa-sign-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>



        <Switch>
          <Route exact path="/" component={CarouselCardParagraph} />          
          <Route path="/login" component={InstructorLoginForm} />
        </Switch>

        
        
      </Router>
    );
  }
}
