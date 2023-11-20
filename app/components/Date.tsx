"use client";

import React from "react";
import { Zoom } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

function Date({ date }: { date: string }) {
  return (
    <section id="date">
      <div className="overflow-x-hidden">
        <Marquee className="overflow-hidden">
          <h1 className="text-white text-opacity-20 text-[200px] leading-[1] font-bold lg:font-medium lg:text-[400px] text-center">
            ~{date}
          </h1>
        </Marquee>
        <Zoom>
          <p className="text-center text-[#84A7A1] text-3xl font-bold py-16 lg:pb-32 lg:text-[2.5rem] lg:leading-[1.15] lg:font-semibold">
            Because perfection is <br />
            never planned
          </p>
        </Zoom>
      </div>
    </section>
  );
}

export default Date;
