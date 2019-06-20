import React, { Component } from "react";

export default class InstructorProfile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>          
        <h1>Welcome to the profile {this.props.match.params.username}</h1>        
      </div>
    );
  }
}
