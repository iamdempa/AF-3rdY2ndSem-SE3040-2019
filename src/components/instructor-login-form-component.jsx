import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class InstructorLoginFormComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log(this.props);
  }

  handleOnClick(e){
      e.preventDefault();
      console.log("Hello");
  }

  render() {
    return (
      <div className="container h-100" style={{ marginTop: 100 }}>
        <div className="d-flex justify-content-center h-100">
          <div className="user_card bg-dark">
            <div className="d-flex justify-content-center">              
            </div>
            <div
              className="d-flex justify-content-center form_container"
              style={{ marginTop: 0 }}
            >
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text bg-info">
                      <i className="fa fa-user" />
                    </span>
                  </div>
                  <input
                    value={this.props.username}
                    onChange={this.props.onChangeUsername}
                    type="text"
                    name="username"
                    className="form-control input_user"
                    placeholder="username"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text bg-info">
                      <i className="fa fa-lock" />
                    </span>
                  </div>
                  <input
                    value={this.props.password}
                    onChange={this.props.onChangePassword}
                    type="password"
                    name="passwordbutton"
                    className="form-control input_user"
                    placeholder="password"
                  />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlInline"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customControlInline"
                      style={{ color: "#ffffff" }}
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <div className="d-flex justify-content-center mt-3 login_container">
              <Link
                to={`/instructor/${this.props.username}`}                
                type="button"
                className="btn login_btn bg-info">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}