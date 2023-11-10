import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { lovelyCoffee } from "../fonts";

function Hero() {
  return (
    <section id="hero">
      <div className="lg:h-screen lg:overflow-hidden px-6 pt-16 mb-12 text-[#D5AF6F] bg-[url('/assets/hero-accent-bg.svg')] lg:bg-none bg-cover bg-no-repeat lg:px-16 lg:grid lg:grid-cols-2 lg:gap-48 lg:items-center relative">
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[250px] bg-[url('/assets/hero-accent-left.svg')] bg-cover bg-no-repeat"></div>
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[250px] bg-[url('/assets/hero-accent-right.svg')] bg-cover bg-no-repeat"></div>
        <div className="hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
          <button className="rounded-[3.125rem] border-2 border-white text-white flex flex-col gap-6 py-4 px-5 items-center text-center">
            <span className="text-2xl font-semibold">
              Our
              <br />
              Story
            </span>
            <span>
              <ArrowDown size={32} />
            </span>
          </button>
        </div>
        <div className="lg:scale-[1.75] lg:-translate-y-12 z-20 relative">
          <h3 className="text-3xl lg:text-2xl lg:font-medium text-center font-semibold">
            Wedding Invitation
          </h3>
          <div className="flex gap-8 lg:justify-center items-end">
            <h1 className="text-[6rem] leading-[1] font-semibold">AGY</h1>
            <span
              className={`text-[7.5rem] leading-[1] ${lovelyCoffee.className}`}
            >
              and
            </span>
          </div>
          <h1 className="text-[6rem] leading-[1] font-semibold text-center">
            YORIKO
          </h1>
        </div>
        <div className="h-[31.25rem] lg:h-full bg-[url('/assets/hero-bg.svg')] bg-cover bg-no-repeat lg:bg-[50%_80%] rounded-tl-full rounded-tr-full flex items-end justify-center p-4 z-20 relative">
          <button className="lg:hidden rounded-[3.125rem] border-2 border-white text-white flex flex-col gap-6 py-4 px-5 items-center text-center">
            <span className="text-2xl font-semibold">
              Our
              <br />
              Story
            </span>
            <span>
              <ArrowDown size={32} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
