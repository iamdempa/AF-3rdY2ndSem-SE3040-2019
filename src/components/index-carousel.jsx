import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

export default class CarouselComponent extends Component {

    

  render() {
    return (
      <Carousel
        showArrows
        emulateTouch
        infiniteLoop
        autoPlay
        interval={2000}
        onChange={this._onChange}
        onClickItem={this._onClickItem}
        onThumbClick={this._onClickThumb}
      >
        <div>
          <img src="http://placehold.it/1080x300?" />
          <p className="legend">Welcome to SLIIT</p>
        </div>
        <div>
          <img src="http://placehold.it/1080x300?" />
          <p className="legend">Faculty of Computing</p>
        </div>
        <div>
          <img src="http://placehold.it/1080x300?" />
          <p className="legend">Faculty of Engineering</p>
        </div>
        <div>
          <img src="http://placehold.it/1080x300?" />
          <p className="legend">Faculty of Business Management</p>
        </div>
      </Carousel>
    );
  }
}
