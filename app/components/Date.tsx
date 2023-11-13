"use client";

import React from "react";
import { Zoom } from "react-awesome-reveal";

function Date() {
  return (
    <section id="date">
      <div className="overflow-x-hidden">
        <h1 className="text-white text-opacity-20 text-[200px] leading-[1] font-bold lg:font-medium lg:text-[400px] text-center">
          31.10.2023
        </h1>
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
