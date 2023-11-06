import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { lovelyCoffee } from "../fonts";

function Hero() {
  return (
    <section id="hero">
      <div className="px-6 py-16">
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
        <div className="h-[31.25rem] bg-zinc-300 rounded-tl-full rounded-tr-full flex items-end justify-center p-4">
          <button className="rounded-[3.125rem] border-2 border-black flex flex-col gap-4 py-4 px-5 items-center text-center">
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
