"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Zoom } from "react-awesome-reveal";
import { lovelyCoffee } from "../fonts";

function Opening() {
  return (
    <section id="opening">
      <div className="h-screen lg:grid lg:grid-cols-2 overflow-hidden relative">
        <div className="hidden lg:block absolute inset-0 bg-[url('/assets/opening-tree.svg')] bg-cover bg-no-repeat"></div>
        <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,60,76,0.88)_0%,rgba(0,60,76,0.88)_51.47%,#003C4C_100%)]"></div>
        <Image
          src="/assets/opening-flower-tl.svg"
          alt="flower"
          width={250}
          height={250}
          className="hidden lg:inline-block absolute top-0 right-0"
        />
        <div className="h-[67.5%] lg:h-full relative pt-16 px-6">
          <div className="z-30 relative lg:hidden">
            <h3 className="text-3xl text-center font-semibold text-[#003C4C]">
              We Invite you to
              <br />
              wedding celebration
            </h3>
            <div className="flex gap-8 items-end text-[#D5AF6F]">
              <h1 className="text-[6rem] leading-[1] font-semibold">AGY</h1>
              <span
                className={`text-[7.5rem] leading-[1] ${lovelyCoffee.className}`}
              >
                and
              </span>
            </div>
            <h1 className="text-[#D5AF6F] text-[6rem] leading-[1] font-semibold text-center mb-8 -translate-x-3">
              YORIKO
            </h1>
          </div>
          <Image
            src="/assets/opening-flower.svg"
            alt="flower"
            width={500}
            height={500}
            className="absolute -bottom-24 -right-4 lg:-bottom-32 lg:-right-8"
          />
          <div className="absolute z-10 inset-0 bg-[url('/assets/opening-bride.svg')] bg-left lg:bg-bottom bg-cover bg-no-repeat rounded-bl-[50px] lg:rounded-bl-none rounded-br-[270px]"></div>
          <div className="absolute z-20 inset-0 bg-black/30 lg:bg-black/0 rounded-bl-[50px] lg:rounded-bl-none rounded-br-[270px]"></div>
        </div>
        <div className="h-[32.5%] lg:h-full flex items-center lg:flex-col lg:justify-between px-6 lg:px-32 lg:py-16 z-30 relative">
          <Zoom>
            <div className="hidden lg:block text-[#D5AF6F]">
              <h3 className="text-3xl text-center font-medium">
                We Invite you to
                <br />
                wedding celebration
              </h3>
              <div className="flex gap-8 items-end">
                <h1 className="text-[6rem] leading-[1] font-semibold">AGY</h1>
                <span
                  className={`text-[7.5rem] leading-[1] ${lovelyCoffee.className}`}
                >
                  and
                </span>
              </div>
              <h1 className="text-[6rem] leading-[1] font-semibold text-center mb-8 -translate-x-3">
                YORIKO
              </h1>
            </div>
          </Zoom>
          <Zoom className="w-full">
            <div className="w-full text-2xl font-semibold">
              <button className="w-full block mb-4 rounded-md border-2 border-[#D5AF6F] bg-[#D5AF6F] text-[#003C4C] py-3">
                Hadiri Resepsi
              </button>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/undangan"
                  className="rounded-md text-center border-2 border-[#84A7A1] text-[#84A7A1] py-3"
                >
                  Undangan
                </Link>
                <button className="rounded-md border-2 border-[#84A7A1] text-[#84A7A1] py-3">
                  Gallery
                </button>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
}

export default Opening;
