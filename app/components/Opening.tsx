import Image from "next/image";
import Link from "next/link";
import React from "react";
import { lovelyCoffee } from "../fonts";

function Opening() {
  return (
    <section id="opening">
      <div className="h-screen">
        <div className="h-[67.5%] relative pt-16 px-6">
          <div className="z-30 relative">
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
            className="absolute -bottom-24 -right-4"
          />
          <div className="absolute z-10 inset-0 bg-[url('/assets/opening-bride.svg')] bg-left rounded-bl-[50px] rounded-br-[270px]"></div>
          <div className="absolute z-20 inset-0 bg-black/30 rounded-bl-[50px] rounded-br-[270px]"></div>
        </div>
        <div className="h-[32.5%] flex items-center px-6 z-30 relative">
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
        </div>
      </div>
    </section>
  );
}

export default Opening;
