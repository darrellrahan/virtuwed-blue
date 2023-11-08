"use client";

import React, { useState } from "react";
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
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    afterChange: (currentSlide: number) => {
      setActiveSlide(currentSlide);
    },
  };

  return (
    <div className="py-8">
      <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
        <div className="px-10">
          <div
            className={`${
              activeSlide === 0
                ? "w-[250px] h-[500px] bg-blue-600"
                : "w-[200px] h-[450px] bg-green-600"
            } duration-300 ease-linear mx-auto`}
          >
            Slide 1
          </div>
        </div>
        <div className="px-10">
          <div
            className={`${
              activeSlide === 1
                ? "w-[250px] h-[500px] bg-blue-600"
                : "w-[200px] h-[450px] bg-green-600"
            } duration-300 ease-linear mx-auto`}
          >
            Slide 2
          </div>
        </div>
        <div className="px-10">
          <div
            className={`${
              activeSlide === 2
                ? "w-[250px] h-[500px] bg-blue-600"
                : "w-[200px] h-[450px] bg-green-600"
            } duration-300 ease-linear mx-auto`}
          >
            Slide 3
          </div>
        </div>
        <div className="px-10">
          <div
            className={`${
              activeSlide === 3
                ? "w-[250px] h-[500px] bg-blue-600"
                : "w-[200px] h-[450px] bg-green-600"
            } duration-300 ease-linear mx-auto`}
          >
            Slide 4
          </div>
        </div>
        <div className="px-10">
          <div
            className={`${
              activeSlide === 4
                ? "w-[250px] h-[500px] bg-blue-600"
                : "w-[200px] h-[450px] bg-green-600"
            } duration-300 ease-linear mx-auto`}
          >
            Slide 5
          </div>
        </div>
        <div className="px-10">
          <div
            className={`${
              activeSlide === 5
                ? "w-[250px] h-[500px] bg-blue-600"
                : "w-[200px] h-[450px] bg-green-600"
            } duration-300 ease-linear mx-auto`}
          >
            Slide 6
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Test;
