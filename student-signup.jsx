import React, { Component } from "react";

export default class InstructorLogin extends Component {
    render() {
        return (
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                                <img
                                    src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png"
                                    className="brand_logo"
                                    alt="Logo"
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center form_container">
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                                    </div>
                                    <input
                                        type="text"
                                        name=""
                                        className="form-control input_user"
                                        value=""
                                        placeholder="Student_name"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                                    </div>
                                    <input
                                        type="text"
                                        name=""
                                        className="form-control input_user"
                                        value=""
                                        placeholder="Student_id"
                                    />
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key" />
                    </span>
                                    </div>
                                    <input
                                        type="password"
                                        name=""
                                        className="form-control input_pass"
                                        value=""
                                        placeholder="password"
                                    />
                                </div>

                                <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                        </div>
                        <input
                            type="text"
                            name=""
                            className="form-control input_user"
                            value=""
                            placeholder="Student_course"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                        </div>
                        <input
                            type="text"
                            name=""
                            className="form-control input_user"
                            value=""
                            placeholder="Student_email"
                        />
                    </div>


                            </form>
                        </div>
                        <div className="d-flex justify-content-center mt-3 login_container">
                            <button type="button" name="button" className="btn signup_btn">
                                Sign In
                            </button>
                        </div>
                        <div className="mt-4">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?{" "}
                                <a href="#" className="ml-2">
                                    Sign Up
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
