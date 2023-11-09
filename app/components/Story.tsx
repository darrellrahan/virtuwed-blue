"use client";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React, { useState } from "react";
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
      <div className="py-24 text-[#D5AF6F]">
        <h1
          className={`text-[4.25rem] text-center mb-12 ${lovelyCoffee.className}`}
        >
          Our Story & Moment
        </h1>
        <div className="px-6 flex justify-between">
          <button onClick={prevSlide}>
            <ArrowLeft size={36} weight="bold" />
          </button>
          <button onClick={nextSlide}>
            <ArrowRight size={36} weight="bold" />
          </button>
        </div>
        <div>
          <div className="relative h-[60.125rem] overflow-hidden flex items-center">
            {CAROUSEL_DATA.map((data, index) => {
              let className = "translate-x-[108%] z-20";

              if (index === carouselIndex) {
                className = "translate-x-0 z-30";
              }
              if (
                index === carouselIndex - 1 ||
                (index === 2 && carouselIndex === 0)
              ) {
                className = "-translate-x-[108%] z-20";
              }

              return (
                <div
                  key={data.img}
                  className={`absolute inset-x-0 w-[290px] mx-auto flex flex-col items-center duration-[0.5s] ease-linear ${className} ${
                    index === carouselIndex ? "inset-y-0" : "inset-y-8"
                  }`}
                >
                  <Image
                    src="/assets/story-date.svg"
                    alt="date"
                    width={300}
                    height={100}
                    className={`translate-y-8 duration-300 ease-linear ${
                      index === carouselIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div
                    className={`w-full h-[530px] rounded-[300px] ${data.img} bg-cover bg-no-repeat mb-8`}
                  ></div>
                  <div className="w-1 h-14 bg-[#D5AF6F]"></div>
                  <h3 className="text-center my-4 text-4xl font-bold">
                    The Day We Met
                  </h3>
                  <p
                    className={`text-white text-2xl text-justify font-medium duration-300 ease-linear ${
                      index === carouselIndex ? "opacity-100" : "opacity-0"
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
