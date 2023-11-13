"use client";

import Image from "next/image";
import React from "react";
import { Zoom } from "react-awesome-reveal";

function Footer() {
  return (
    <section id="footer">
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <Image
          src="/assets/footer-accent.svg"
          alt="accent"
          width={800}
          height={800}
          className="hidden lg:block absolute bottom-0 left-0 -translate-x-[3.9rem]"
        />
        <Image
          src="/assets/footer-accent.svg"
          alt="accent"
          width={800}
          height={800}
          className="hidden lg:block absolute bottom-0 right-0"
          style={{ transform: "rotateY(180deg)" }}
        />
        <div className="absolute bottom-0 inset-x-0 h-[250px] bg-[url('/assets/footer-accent.png')] bg-cover bg-no-repeat lg:hidden"></div>
        <Zoom>
          <Image
            src="/assets/footer.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="-translate-y-16 lg:translate-y-0 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
          />
        </Zoom>
      </div>
    </section>
  );
}

export default Footer;
