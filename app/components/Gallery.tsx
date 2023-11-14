"use client";

import { Play } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { lovelyCoffee } from "../fonts";

function Gallery() {
  return (
    <section id="gallery">
      <div className="relative my-8">
        <Image
          src="/assets/gallery-flower.png"
          alt="flower"
          width={150}
          height={150}
          className="absolute top-0 right-0 lg:hidden"
        />
        <Fade direction="up">
          <h1
            className={`text-[#D5AF6F] px-6 text-[5rem] mb-4 lg:text-center lg:text-8xl lg:mb-16 ${lovelyCoffee.className}`}
          >
            Our Gallery
          </h1>
        </Fade>
        <Fade direction="up">
          <div className="h-[250px] lg:w-[900px] lg:mx-auto lg:h-[550px] flex items-center justify-center relative bg-[url('/assets/gallery.svg')] bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black/40"></div>
            <button className="z-10">
              <Play size={80} color="#ffffff" weight="fill" />
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Gallery;
