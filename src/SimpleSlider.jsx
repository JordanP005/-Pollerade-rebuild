import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slider-block">
            <img src="images/customer.svg" alt="" />{" "}
            <h1>Working With The Customer</h1>{" "}
            <p>
              We strive to get your business to reach your goals and offer
              tailor made services to optimize your expierience
            </p>
          </div>
          <div className="slider-block">
            <img src="images/progress.svg" alt="" />{" "}
            <h1>Tracking Your Service</h1>{" "}
            <p>
              See what we are doing every step of the way and keep up to date on
              progress
            </p>
          </div>
          <div className="slider-block">
            <img src="images/time.svg" alt="" />{" "}
            <h1>Getting You Results On Time</h1>{" "}
            <p>
              We strive to get your business results as effiecently as possible
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
