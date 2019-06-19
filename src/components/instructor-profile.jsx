import React, { Component } from "react";

export default class InstructorProfile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>          
        <h1>Welcome to the profile {this.props.username}</h1>
      </div>
    );
  }
}
