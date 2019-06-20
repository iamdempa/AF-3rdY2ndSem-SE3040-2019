import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InstructorProfile from "./instructor-profile";
import InstructorLoginFormComponent from "./instructor-login-form-component";
import axio from 'axios';

export default class InstructorLoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleOnClick(e) {
    e.preventDefault();
    this.props.history.push(`/instructor/${this.state.username}`);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={props => (
              <InstructorLoginFormComponent
                {...props}
                username={this.state.username}
                onChangeUsername={this.onChangeUsername}
                password={this.state.password}
                onChangePassword={this.onChangePassword}
                handleOnClick={this.handleOnClick}
              />
            )}
          />

          <Route
            path={"/instructor/:username"}
            render={props => (
              <InstructorProfile {...props} username={props.match.params.username} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}
