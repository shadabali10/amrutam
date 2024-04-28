import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Lazyload() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          1
        </div>
        <div>
         2
        </div>
        <div>
          3
        </div>
        <div>
         4
        </div>
      </Slider>
    </div>
  );
}

export default Lazyload;
