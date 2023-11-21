"use client";

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
            className={`text-[#D5AF6F] px-6 text-[5rem] lg:text-center lg:text-8xl lg:mb-12 ${lovelyCoffee.className}`}
          >
            Our Gallery
          </h1>
        </Fade>
        <Fade direction="up">
          <iframe
            width="1000"
            height="1000"
            src="https://www.youtube.com/embed/_5Gg2rFJ6Q0?si=CT8TBTcliXQIaQnp"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-[250px] lg:w-[900px] lg:mx-auto lg:h-[550px]"
          ></iframe>
        </Fade>
      </div>
    </section>
  );
}

export default Gallery;
