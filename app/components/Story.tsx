import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { lovelyCoffee } from "../fonts";

function Story() {
  return (
    <section id="story">
      <div className="py-24 text-[#D5AF6F]">
        <h1
          className={`text-[4.25rem] text-center mb-12 ${lovelyCoffee.className}`}
        >
          Our Story & Moment
        </h1>
        <div className="px-6 flex justify-between">
          <button>
            <ArrowLeft size={36} weight="bold" />
          </button>
          <button>
            <ArrowRight size={36} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Story;
