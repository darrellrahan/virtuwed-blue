"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { lovelyCoffee } from "../fonts";

function DetailDate() {
  const [isTabVirtual, setIsTabVirtual] = useState(true);

  return (
    <section id="detail-date" className="relative">
      <div className="absolute inset-0 bg-[url('/assets/date-bg.svg')] bg-no-repeat bg-cover bg-center hidden lg:block"></div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,60,76,0.78)_0%,rgba(0,60,76,0.85)_74.88%,#003C4C_109.92%)] hidden lg:block"></div>
      <Image
        src="/assets/date-flower-left.svg"
        alt="flower"
        width={250}
        height={250}
        className="absolute bottom-0 left-0 hidden lg:inline-block"
      />
      <Image
        src="/assets/date-flower-right.svg"
        alt="flower"
        width={250}
        height={250}
        className="absolute bottom-0 right-0 hidden lg:inline-block"
      />
      <div className="absolute bottom-0 inset-x-0 h-[125px] bg-[url('/assets/date-flower.png')] lg:hidden"></div>
      <div className="px-6 lg:px-32 pt-12 lg:pt-32 pb-40 lg:pb-48 text-[#D5AF6F] z-10 relative">
        <Fade direction="down">
          <h1 className={`text-center text-8xl mb-8 ${lovelyCoffee.className}`}>
            Save <br className="lg:hidden" />
            The Date
          </h1>
        </Fade>
        <Fade direction="up">
          <h3 className="text-center text-[4.25rem] lg:text-[5rem] leading-[1] font-light mb-16 text-[#84A7A1]">
            00:00:00:00
          </h3>
        </Fade>
        <Fade direction="up">
          <div className="grid grid-cols-2 text-2xl lg:text-3xl mb-10 lg:mb-16">
            <button
              onClick={() => setIsTabVirtual(true)}
              className={`border-r-2 border-b-2 pb-3 border-[#84A7A1] lg:pb-4 ${
                isTabVirtual ? "underline" : ""
              }`}
            >
              Online
            </button>
            <button
              onClick={() => setIsTabVirtual(false)}
              className={`border-b-2 pb-3 lg:pb-4 border-[#84A7A1] ${
                !isTabVirtual ? "underline" : ""
              }`}
            >
              Offline
            </button>
          </div>
        </Fade>
        <Fade direction="up">
          <div className="text-center space-y-4 mb-16 text-[#84a7a1]">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              {isTabVirtual ? "Intimate Reception" : "It's Wedding Day"}
            </h1>
            <p className="font-medium text-xl lg:text-2xl">
              We invite you to the following <br />
              {isTabVirtual && "Virtual"} Wedding Reception
            </p>
          </div>
        </Fade>
        <Fade direction="up">
          <div className="mb-12 lg:mb-20 lg:flex lg:justify-center lg:gap-16">
            <div className="space-y-4 font-semibold lg:space-y-8">
              <h1 className="text-center text-4xl">Akad nikah</h1>
              <div className="flex lg:flex-col items-center justify-center gap-4 lg:gap-8">
                <span className="text-xl py-2 border-y lg:text-3xl border-[#DBBB85] lg:font-semibold">
                  T U E S D A Y
                </span>
                <span className="text-8xl">8</span>
                <span className="text-xl py-2 border-y lg:text-3xl border-[#DBBB85] lg:font-semibold">
                  O C T O B E R
                </span>
              </div>
              <p className="text-center text-3xl">09:00 - 12:00</p>
            </div>
            <div className="my-12 h-[2px] lg:w-[1.5px] lg:h-[405px] lg:my-0 bg-[#84A7A1]" />
            <div className="space-y-4 font-semibold lg:space-y-8">
              <h1 className="text-center text-4xl">Resepsi</h1>
              <div className="flex lg:flex-col items-center justify-center gap-4 lg:gap-8">
                <span className="text-xl py-2 border-y lg:text-3xl border-[#DBBB85] lg:font-semibold">
                  T U E S D A Y
                </span>
                <span className="text-8xl">8</span>
                <span className="text-xl py-2 border-y lg:text-3xl border-[#DBBB85] lg:font-semibold">
                  O C T O B E R
                </span>
              </div>
              <p className="text-center text-3xl">16:00 - 21:00</p>
            </div>
          </div>
        </Fade>
        <Fade direction="up">
          <div className="flex justify-center">
            <button className="rounded-md border-2 border-[#D5AF6F] bg-[#D5AF6F] text-[#003C4C] py-3 px-6 text-2xl font-bold">
              {isTabVirtual ? "Hadiri Resepsi" : "View Maps"}
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default DetailDate;
