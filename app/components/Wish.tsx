"use client";

import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { lovelyCoffee } from "../fonts";

function Wish() {
  return (
    <section id="wish" className="relative">
      <div className="absolute top-80 inset-x-0 h-[650px] bg-[url('/assets/wishes-bg.svg')] bg-cover bg-no-repeat lg:hidden"></div>
      <div className="px-6 lg:px-16 pt-16 lg:pt-32 z-10 relative">
        <h1
          className={`text-[#D5AF6F] text-7xl lg:text-8xl ${lovelyCoffee.className} text-center mb-8 lg:mb-16`}
        >
          <Fade direction="up">Wedding Wishes</Fade>
        </h1>
        <Fade direction="up">
          <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-12 lg:w-[600px] lg:mx-auto">
            <div className="bg-[#D5AF6F] p-4">
              <div className="bg-white h-[115px] lg:h-[180px] flex items-center justify-center text-5xl lg:text-7xl mb-4">
                0
              </div>
              <p className="text-3xl font-semibold text-center text-[#003C4C]">
                Ragu
              </p>
            </div>
            <div className="bg-[#D5AF6F] p-4">
              <div className="bg-white h-[115px] lg:h-[180px] flex items-center justify-center text-5xl lg:text-7xl mb-4">
                0
              </div>
              <p className="text-3xl font-semibold text-center text-[#003C4C]">
                Hadir
              </p>
            </div>
            <div className="bg-[#D5AF6F] p-4">
              <div className="bg-white h-[115px] lg:h-[180px] flex items-center justify-center text-5xl lg:text-7xl mb-4">
                0
              </div>
              <p className="text-3xl font-semibold text-center text-[#003C4C]">
                Absen
              </p>
            </div>
          </div>
          <div className="space-y-4 mb-12 lg:mb-32 lg:w-[600px] lg:mx-auto">
            <div className="grid grid-cols-2 gap-4 h-[60px] text-xl font-semibold">
              <input
                type="text"
                className="h-full rounded-md px-4 flex items-center placeholder:text-black"
                placeholder="Name"
              />
              <div className="relative">
                <span className="absolute top-3.5 right-4">
                  <CaretDown size={32} />
                </span>
                <select className="h-full w-full rounded-md px-4 flex items-center appearance-none">
                  <option value="hadir">Hadir</option>
                  <option value="absen">Absen</option>
                  <option value="ragu">Ragu</option>
                </select>
              </div>
            </div>
            <div>
              <textarea
                placeholder="Your wish..."
                className="w-full h-[225px] rounded-md placeholder:text-black p-4 text-xl font-semibold"
              />
            </div>
            <div>
              <button className="rounded-md border-2 border-[#D5AF6F] bg-[#D5AF6F] text-[#003C4C] py-3 text-center w-full text-2xl font-bold">
                Kirim
              </button>
            </div>
          </div>
        </Fade>
        <h3 className="text-[#D5AF6F] text-3xl lg:text-4xl lg:font-semibold lg:mb-10 font-bold mb-8">
          <Zoom>18 Wishes</Zoom>
        </h3>
        <Zoom>
          <div className="space-y-4 mb-8 lg:mb-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="p-6 bg-white rounded-md">
              <div className="flex items-end gap-3 mb-1">
                <h4 className="text-2xl font-bold">Darrell</h4>
                <p className="text-lg font-light">3h ago</p>
              </div>
              <p className="text-[1.35rem] font-light overflow-hidden">
                semangat menempuh hidup baru ya
              </p>
            </div>
            <div className="p-6 bg-white rounded-md">
              <div className="flex items-end gap-3 mb-1">
                <h4 className="text-2xl font-bold">Pamella</h4>
                <p className="text-lg font-light">1d ago</p>
              </div>
              <p className="text-[1.35rem] font-light">semoga langgeng</p>
            </div>
            <div className="p-6 bg-white rounded-md">
              <div className="flex items-end gap-3 mb-1">
                <h4 className="text-2xl font-bold">Elang Fajar Buana</h4>
                <p className="text-lg font-light">1w ago</p>
              </div>
              <p className="text-[1.35rem] font-light">gacor teruss</p>
            </div>
            <div className="p-6 bg-white rounded-md hidden lg:block">
              <div className="flex items-end gap-3 mb-1">
                <h4 className="text-2xl font-bold">Darrell</h4>
                <p className="text-lg font-light">3h ago</p>
              </div>
              <p className="text-[1.35rem] font-light overflow-hidden">
                semangat menempuh hidup baru ya
              </p>
            </div>
            <div className="p-6 bg-white rounded-md hidden lg:block">
              <div className="flex items-end gap-3 mb-1">
                <h4 className="text-2xl font-bold">Pamella</h4>
                <p className="text-lg font-light">1d ago</p>
              </div>
              <p className="text-[1.35rem] font-light">semoga langgeng</p>
            </div>
            <div className="p-6 bg-white rounded-md hidden lg:block">
              <div className="flex items-end gap-3 mb-1">
                <h4 className="text-2xl font-bold">Elang Fajar Buana</h4>
                <p className="text-lg font-light">1w ago</p>
              </div>
              <p className="text-[1.35rem] font-light">gacor teruss</p>
            </div>
            <div className="p-6 bg-white rounded-md hidden lg:block">
              <div className="flex items-end gap-3 mb-1">
                <h4 className="text-2xl font-bold">Darrell</h4>
                <p className="text-lg font-light">3h ago</p>
              </div>
              <p className="text-[1.35rem] font-light overflow-hidden">
                semangat menempuh hidup baru ya
              </p>
            </div>
            <div className="p-6 bg-white rounded-md hidden lg:block">
              <div className="flex items-end gap-3 mb-1">
                <h4 className="text-2xl font-bold">Pamella</h4>
                <p className="text-lg font-light">1d ago</p>
              </div>
              <p className="text-[1.35rem] font-light">semoga langgeng</p>
            </div>
            <div className="p-6 bg-white rounded-md hidden lg:block">
              <div className="flex items-end gap-3 mb-1">
                <h4 className="text-2xl font-bold">Elang Fajar Buana</h4>
                <p className="text-lg font-light">1w ago</p>
              </div>
              <p className="text-[1.35rem] font-light">gacor teruss</p>
            </div>
          </div>
        </Zoom>
        <div className="flex justify-center">
          <button className="text-3xl border-b border-[#D5AF6F] text-[#D5AF6F]">
            See more
          </button>
        </div>
      </div>
    </section>
  );
}

export default Wish;
