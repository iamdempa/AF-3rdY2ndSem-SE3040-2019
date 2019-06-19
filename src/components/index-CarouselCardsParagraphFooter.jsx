import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import Footer from "./index-footer";
import Carousel from "./index-carousel";
import Cards from "./index-cards";
import Paragraph from './index-paragraph';

export default class Navbar extends Component {
  render() {
    return (
      <>
        {/* show carousel */}
        <Carousel />

        {/* show cards  */}
        <Cards />

        <br />

        {/* show paragraph here  */}
        <Paragraph />

        {/* show footer here  */}
        <Footer />
      </>
    );
  }
}
