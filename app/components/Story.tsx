"use client";

import React, { useEffect, useState } from "react";
import { useDataContext } from "../context";
import { lovelyCoffee } from "../fonts";

function Story() {
  const { data } = useDataContext();

  if (!data) return null;

  const maxIndex = data.data.wedding.undangan_digital.kisah_cinta.length - 1;

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [prevBtn, setPrevBtn] = useState({
    year: data.data.wedding.undangan_digital.kisah_cinta[
      maxIndex
    ].kisah_cinta_date.split("-")[0],
    number: `#${data.data.wedding.undangan_digital.kisah_cinta.length}`,
  });
  const [nextBtn, setNextBtn] = useState({
    year: data.data.wedding.undangan_digital.kisah_cinta[1].kisah_cinta_date.split(
      "-"
    )[0],
    number: "#2",
  });

  function nextSlide() {
    setCarouselIndex(carouselIndex === maxIndex ? 0 : carouselIndex + 1);
  }
  function prevSlide() {
    setCarouselIndex(carouselIndex === 0 ? maxIndex : carouselIndex - 1);
  }

  useEffect(() => {
    setPrevBtn({
      year: data.data.wedding.undangan_digital.kisah_cinta[
        carouselIndex === 0 ? maxIndex : carouselIndex - 1
      ].kisah_cinta_date.split("-")[0],
      number: `#${carouselIndex === 0 ? maxIndex + 1 : carouselIndex}`,
    });
    setNextBtn({
      year: data.data.wedding.undangan_digital.kisah_cinta[
        carouselIndex === maxIndex ? 0 : carouselIndex + 1
      ].kisah_cinta_date.split("-")[0],
      number: `#${carouselIndex === maxIndex ? 1 : carouselIndex + 2}`,
    });
  }, [carouselIndex]);

  return (
    <section id="story">
      <div className="bg-white text-[#003C4C] py-12">
        <h1 className={`${lovelyCoffee.className} text-center text-8xl mb-12`}>
          Love Stories
        </h1>
        <div className="relative h-[750px] flex items-center overflow-hidden">
          <button
            className="absolute top-0 left-0 text-center text-black z-10"
            onClick={prevSlide}
          >
            <span className="text-4xl font-bold">{prevBtn.year}</span> <br />{" "}
            <span className="text-xl">{prevBtn.number}</span>
          </button>
          <button
            className="absolute top-0 right-0 text-center text-black z-10"
            onClick={nextSlide}
          >
            <span className="text-4xl font-bold">{nextBtn.year}</span> <br />{" "}
            <span className="text-xl">{nextBtn.number}</span>
          </button>
          {data.data.wedding.undangan_digital.kisah_cinta.map(
            (item: any, index: number) => {
              let className = "translate-x-full opacity-0";

              if (index === carouselIndex) {
                className = "translate-x-0 opacity-100";
              }
              if (
                index === carouselIndex - 1 ||
                (index === maxIndex && carouselIndex === 0)
              ) {
                className = "-translate-x-full opacity-0";
              }

              return (
                <div
                  key={item.kisah_cinta_judul}
                  className={`absolute inset-0 duration-300 ease-linear ${className}`}
                >
                  <div className="flex flex-col gap-4 items-center">
                    <h1 className="text-6xl font-semibold text-black">
                      {item.kisah_cinta_date.split("-")[0]}
                    </h1>
                    <div className="w-[1.25px] h-[100px] bg-black"></div>
                    <p className="text-xl text-black">#{index + 1}</p>
                    <p className="text-2xl font-semibold px-12">
                      {item.kisah_cinta_cerita}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

export default Story;
