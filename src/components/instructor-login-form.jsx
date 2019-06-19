import React, { Component } from "react";

export default class InstructorLoginForm extends Component {
  render() {
    return (
      
      <div className="container h-100" style={{marginTop:100}}>
        <div className="d-flex justify-content-center h-100">
          <div className="user_card bg-dark">
            <div className="d-flex justify-content-center">
              {/* <div className="brand_logo_container">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png"
                  className="brand_logo"
                  alt="Logo"
                />
              </div> */}
            </div>
            <div className="d-flex justify-content-center form_container" style={{marginTop:0}}>
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text bg-info">
                      <i className="fa fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    name=""
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
                    type="password"
                    name=""
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
                      style={{color: "#ffffff"}}
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-center mt-3 login_container">
              <button type="button" name="button" className="btn login_btn bg-info">
                Login
              </button>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}
