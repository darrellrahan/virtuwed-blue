import React from "react";
import { lovelyCoffee } from "../fonts";

function DetailDate() {
  return (
    <section id="detail-date" className="relative">
      <div className="absolute bottom-0 inset-x-0 h-[125px] bg-[url('/assets/date-flower.png')]"></div>
      <div className="px-6 pt-12 pb-40 text-[#D5AF6F]">
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
        <div className="text-center space-y-4 mb-16 text-[#84a7a1]">
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
        <div className="space-y-4 font-semibold">
          <h1 className="text-center text-4xl">Akad nikah</h1>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl py-2 border-y-2 border-[#DBBB85]">
              T U E S D A Y
            </span>
            <span className="text-8xl">8</span>
            <span className="text-xl py-2 border-y-2 border-[#DBBB85]">
              O C T O B E R
            </span>
          </div>
          <p className="text-center text-3xl">09:00 - 12:00</p>
        </div>
        <hr className="my-12 border border-[#84A7A1]" />
        <div className="space-y-4 font-semibold mb-12">
          <h1 className="text-center text-4xl">Resepsi</h1>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl py-2 border-y-2 border-[#DBBB85]">
              T U E S D A Y
            </span>
            <span className="text-8xl">8</span>
            <span className="text-xl py-2 border-y-2 border-[#DBBB85]">
              O C T O B E R
            </span>
          </div>
          <p className="text-center text-3xl">16:00 - 21:00</p>
        </div>
        <div className="flex justify-center">
          <button className="rounded-md border-2 border-[#D5AF6F] bg-[#D5AF6F] text-[#003C4C] py-3 px-6 text-2xl font-bold">
            Hadiri Resepsi
          </button>
        </div>
      </div>
    </section>
  );
}

export default DetailDate;
