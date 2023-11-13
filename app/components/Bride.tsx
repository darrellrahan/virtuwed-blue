"use client";

import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

function Bride() {
  return (
    <section id="bride" className="relative">
      <div className="absolute inset-0 bg-[url('/assets/bride-bg.svg')] bg-cover"></div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,60,76,0.78)_0%,rgba(0,60,76,0.85)_74.88%,#003C4C_109.92%)]"></div>
      <div className="text-[#D5AF6F] z-20 relative lg:grid lg:grid-cols-2 lg:h-screen">
        <Fade
          direction="left"
          className="absolute bottom-8 left-8 hidden lg:block z-10"
        >
          <span className="text-[#D5AF6F] text-3xl font-semibold">
            Putra dari
            <br />
            Bapak Agus
            <br />
            Ibu Evy
          </span>
        </Fade>
        <Fade
          direction="right"
          className="absolute bottom-8 right-8 hidden lg:block z-10 text-right"
        >
          <span className="text-[#D5AF6F] text-3xl font-semibold">
            Putra dari
            <br />
            Bapak Agus
            <br />
            Ibu Tuti
          </span>
        </Fade>
        <div className="h-full lg:bg-[url('/assets/groom.svg')] lg:bg-cover lg:bg-no-repeat lg:bg-center relative lg:flex lg:items-center lg:justify-center">
          <div className="absolute inset-0 bg-black/50 hidden lg:block"></div>
          <div className="h-[15rem] bg-[url('/assets/groom.svg')] bg-cover bg-no-repeat lg:hidden"></div>
          <Zoom>
            <div className="py-12 flex flex-col items-center gap-16 font-bold z-10 relative">
              <div className="space-y-4 text-center">
                <h1 className="text-4xl lg:text-5xl leading-[1.25]">
                  Muhamad Agy
                  <br />
                  Nurwicaksono
                </h1>
                <h3 className="text-2xl lg:hidden">Putra dari Agus dan Evy</h3>
                <Link
                  href="https://www.instagram.com/agyson"
                  className="flex items-center justify-center gap-2"
                >
                  <InstagramLogo size={32} />
                  <span className="text-2xl lg:font-normal">agyson</span>
                </Link>
              </div>
              <span className="text-8xl lg:hidden">&</span>
            </div>
          </Zoom>
        </div>
        <div className="h-full lg:bg-[url('/assets/bride.svg')] lg:bg-cover lg:bg-no-repeat lg:bg-center relative lg:flex lg:items-center lg:justify-center">
          <div className="absolute inset-0 bg-black/50 hidden lg:block"></div>
          <div className="h-[15rem] bg-[url('/assets/bride.svg')] bg-cover bg-no-repeat lg:hidden"></div>
          <Zoom>
            <div className="py-12 font-bold space-y-4 text-center z-10 relative">
              <h1 className="text-4xl lg:text-5xl">
                Yoriko <br className="hidden lg:inline-block" /> Angeline
              </h1>
              <h3 className="text-2xl lg:hidden">
                Putri dari Agus dan Ibu Tuti
              </h3>
              <Link
                href="https://www.instagram.com/yorikoangeline"
                className="flex items-center justify-center gap-2"
              >
                <InstagramLogo size={32} />
                <span className="text-2xl lg:font-normal">yorikoangeline</span>
              </Link>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
}

export default Bride;
