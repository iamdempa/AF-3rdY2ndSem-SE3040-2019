import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import homepage from "./components/index-homepage";
import InstructorLoginForm from "./components/instructor-login-form";
import InstructorProfile from "./components/instructor-profile";
import Homepage from "./components/index-homepage";

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
        <Switch>                  
          <Route exact path="/" render = {props => (
            <Homepage {...props}/>
          )} />
          <Route path="/login" component={InstructorLoginForm} />
          <Route path="/instructor/:username" component={InstructorProfile} />
          <Route path="/instructor/:username/assignment/add" component={InstructorProfile} />
        </Switch>
      </Router>
    );
  }
}
