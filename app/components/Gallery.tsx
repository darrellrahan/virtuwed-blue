import { Play } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";
import { lovelyCoffee } from "../fonts";

function Gallery() {
  return (
    <section id="gallery">
      <div className="relative">
        <Image
          src="/assets/gallery-flower.png"
          alt="flower"
          width={125}
          height={110}
          className="absolute top-0 right-0"
        />
        <h1
          className={`text-[#D5AF6F] px-6 text-[5rem] mb-16 ${lovelyCoffee.className}`}
        >
          Our Gallery
        </h1>
        <div className="h-[250px] flex items-center justify-center relative bg-[url('/assets/gallery.svg')]">
          <div className="absolute inset-0 bg-black/40"></div>
          <button className="z-10">
            <Play size={80} color="#ffffff" weight="fill" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
