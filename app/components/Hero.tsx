import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { lovelyCoffee } from "../fonts";

function Hero() {
  return (
    <section id="hero">
      <div className="px-6 pt-16 mb-12 text-[#D5AF6F] bg-[url('/assets/hero-accent-bg.svg')] bg-cover bg-no-repeat">
        <h3 className="text-3xl text-center font-semibold">
          Wedding Invitation
        </h3>
        <div className="flex gap-8 items-end">
          <h1 className="text-[6rem] leading-[1] font-semibold">AGY</h1>
          <span
            className={`text-[7.5rem] leading-[1] ${lovelyCoffee.className}`}
          >
            and
          </span>
        </div>
        <h1 className="text-[6rem] leading-[1] font-semibold text-center mb-8">
          YORIKO
        </h1>
        <div className="h-[31.25rem] bg-[url('/assets/hero-bg.svg')] bg-cover bg-no-repeat rounded-tl-full rounded-tr-full flex items-end justify-center p-4">
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
      </div>
    </section>
  );
}

export default Hero;
