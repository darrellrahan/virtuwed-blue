"use client";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { lovelyCoffee } from "../fonts";

function Story() {
  const CAROUSEL_DATA = [
    {
      img: "bg-[url('/assets/story-1.svg')]",
    },
    {
      img: "bg-[url('/assets/story-2.svg')]",
    },
    {
      img: "bg-[url('/assets/story-3.svg')]",
    },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  function nextSlide() {
    setCarouselIndex(carouselIndex === 2 ? 0 : carouselIndex + 1);
  }
  function prevSlide() {
    setCarouselIndex(carouselIndex === 0 ? 2 : carouselIndex - 1);
  }

  return (
    <section id="story">
      <div className="py-24 text-[#D5AF6F] lg:flex lg:px-16">
        <Fade direction="left">
          <h1
            className={`text-[4.25rem] lg:translate-y-52 lg:translate-x-12 lg:text-9xl text-center mb-12 ${lovelyCoffee.className}`}
          >
            Our Story <br className="hidden lg:inline-block" /> & Moment
          </h1>
        </Fade>
        <div className="lg:w-full">
          <div className="px-6 lg:px-0 flex justify-between lg:justify-end lg:gap-4">
            <button onClick={prevSlide}>
              <ArrowLeft size={36} weight="bold" />
            </button>
            <button onClick={nextSlide}>
              <ArrowRight size={36} weight="bold" />
            </button>
          </div>
          <div className="relative h-[60.125rem] lg:h-[65rem] overflow-hidden flex items-center lg:translate-x-32">
            {CAROUSEL_DATA.map((data, index) => {
              let className = "lg:translate-x-[95%] translate-x-[90%] z-20";

              if (index === carouselIndex) {
                className = "translate-x-0 z-30";
              }
              if (
                index === carouselIndex - 1 ||
                (index === 2 && carouselIndex === 0)
              ) {
                className = "lg:-translate-x-[95%] -translate-x-[90%] z-20";
              }

              return (
                <div
                  key={data.img}
                  className={`absolute inset-0 w-[290px] lg:w-[250px] mx-auto flex flex-col items-center duration-[0.5s] ease-linear ${className} ${
                    index === carouselIndex ? "scale-100" : "scale-[0.6]"
                  }`}
                >
                  <Image
                    src="/assets/story-date.svg"
                    alt="date"
                    width={300}
                    height={100}
                    className={`translate-y-8 duration-300 ease-linear ${
                      index === carouselIndex
                        ? "opacity-100"
                        : "opacity-0 lg:opacity-100"
                    }`}
                  />
                  <div
                    className={`w-full h-[530px] rounded-[300px] ${data.img} bg-cover bg-no-repeat mb-8`}
                  ></div>
                  <div
                    className={`w-1 h-14 bg-[#D5AF6F] duration-300 ease-linear ${
                      index === carouselIndex
                        ? "opacity-100"
                        : "opacity-0 lg:opacity-100"
                    }`}
                  ></div>
                  <h3
                    className={`text-center my-4 text-4xl font-bold duration-300 ease-linear ${
                      index === carouselIndex
                        ? "opacity-100"
                        : "opacity-0 lg:opacity-100"
                    }`}
                  >
                    The Day We Met
                  </h3>
                  <p
                    className={`text-white text-2xl text-justify font-medium duration-300 ease-linear ${
                      index === carouselIndex
                        ? "opacity-100"
                        : "opacity-0 lg:opacity-100"
                    }`}
                  >
                    It was late afternoon, the first time we met. A quick hello
                    that leads to each poems and conversations. “When will we
                    see each other again?” fleeting thoughts come up to mind.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
