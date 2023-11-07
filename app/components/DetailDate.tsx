import React from "react";
import { lovelyCoffee } from "../fonts";

function DetailDate() {
  return (
    <section id="detail-date">
      <div className="px-6 py-12 text-[#D5AF6F]">
        <h1 className={`text-center text-8xl mb-8 ${lovelyCoffee.className}`}>
          Save
          <br />
          The Date
        </h1>
        <h3 className="text-center text-[4.25rem] leading-[1] font-light mb-16 text-[#84A7A1]">
          00:00:00:00
        </h3>
        <div className="grid grid-cols-2 text-xl mb-10">
          <button className="border-r-2 border-b-2 pb-3 border-[#84A7A1]">
            Resepsi Virtual
          </button>
          <button className="border-b-2 pb-3 border-[#84A7A1]">Resepsi</button>
        </div>
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl font-semibold">
            Intimate Virtual
            <br />
            Reception
          </h1>
          <p className="font-medium text-xl">
            We invite you to the following <br />
            Virtual Wedding Reception
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <span className="text-2xl font-bold tracking-wider py-2 border-y-2 border-[#DBBB85]">
            T U E S D A Y
          </span>
          <span className="text-8xl font-semibold">8</span>
          <span className="text-2xl font-bold tracking-wider py-2 border-y-2 border-[#DBBB85]">
            O C T O B E R
          </span>
        </div>
        <p className="text-center text-3xl font-bold py-12">09:00 - 12:00</p>
        <div className="flex justify-center">
          <button className="rounded-md border-2 border-[#D5AF6F] bg-[#D5AF6F] text-black py-3 px-6 text-2xl font-bold">
            Hadiri Resepsi
          </button>
        </div>
      </div>
    </section>
  );
}

export default DetailDate;
