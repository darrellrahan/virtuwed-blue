"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`absolute -bottom-32 right-0 text-green-600`}
      onClick={onClick}
    >
      Next
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`absolute -bottom-32 left-0 text-yellow-600`}
      onClick={onClick}
    >
      Prev
    </div>
  );
}

function Test() {
  const settings = {
    centerMode: true,
    centerPadding: "45px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <div className="py-8">
      <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
        <div>
          <div className="w-[270px] h-[530px] mx-auto bg-green-600">
            Slide 1
          </div>
        </div>
        <div>
          <div className="w-[270px] h-[530px] mx-auto bg-green-600">
            Slide 2
          </div>
        </div>
        <div>
          <div className="w-[270px] h-[530px] mx-auto bg-green-600">
            Slide 3
          </div>
        </div>
        <div>
          <div className="w-[270px] h-[530px] mx-auto bg-green-600">
            Slide 4
          </div>
        </div>
        <div>
          <div className="w-[270px] h-[530px] mx-auto bg-green-600">
            Slide 5
          </div>
        </div>
        <div>
          <div className="w-[270px] h-[530px] mx-auto bg-green-600">
            Slide 6
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default Test;
