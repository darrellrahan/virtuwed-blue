"use client";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { useDataContext } from "../context";
import { lovelyCoffee } from "../fonts";

function Story() {
  const { data } = useDataContext();
  const sliderRef = useRef<HTMLDivElement>(null);

  if (!data) return null;

  return (
    <section id="story">
      <div className="py-24 text-[#D5AF6F]">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 lg:items-center mb-16 px-6 lg:px-16">
          <Fade direction="left">
            <h1
              className={`text-[4.25rem] lg:text-9xl ${lovelyCoffee.className}`}
            >
              Our Moments
            </h1>
          </Fade>
          <Fade direction="right">
            <div className="flex justify-between lg:gap-8">
              <button
                onClick={() => {
                  const slider = sliderRef.current;
                  slider!.scrollLeft = slider!.scrollLeft - 250;
                }}
              >
                <ArrowLeft size={36} weight="bold" />
              </button>
              <button
                onClick={() => {
                  const slider = sliderRef.current;
                  slider!.scrollLeft = slider!.scrollLeft + 250;
                }}
              >
                <ArrowRight size={36} weight="bold" />
              </button>
            </div>
          </Fade>
        </div>
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scroll-smooth px-6 lg:px-16"
        >
          {data.data.wedding.media.prewedding_photos.map((data: any) => {
            return (
              <div
                style={{
                  backgroundImage: `url('https://sgp1.vultrobjects.com/virtuwed-storage/${data}')`,
                }}
                key={data}
                className={`flex-none w-[270px] h-[370px] lg:w-[370px] lg:h-[470px] bg-cover bg-center rounded-[15px]`}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Story;
