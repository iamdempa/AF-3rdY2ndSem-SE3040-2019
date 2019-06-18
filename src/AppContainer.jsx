import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Carousel from './components/carousel';

export default class App extends Component {

  
  showLoginOrProfileButtons() {
    const x = 10;
    if(x<20){
      return <Link to="/login" className="btn btn-info btn-sm">
              {" "}
              Login <span className="fa fa-sign-in" />
            </Link>;
    }else{
      return <Link to="/login" className="btn btn-info btn-sm">
      {" "}
      Signup <span className="fa fa-sign-in" />
    </Link>;
    }
    
  }

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <img src="http://placehold.it/50x40?" alt="" />
              </li>
              <li className="nav-item active" style={{ marginLeft: 10 }}>
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
              <li className="nav-item">{this.showLoginOrProfileButtons()}</li>
            </ul>
          </div>
        </nav>
    
        <Carousel />
      </Router>      
    );
  }
}
