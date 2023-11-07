import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

function Bride() {
  return (
    <section id="bride">
      <div className="text-[#D5AF6F]">
        <div className="h-[15rem] bg-[url('/assets/groom.svg')] bg-cover bg-no-repeat"></div>
        <div className="py-12 flex flex-col items-center gap-16 font-bold">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl">Muhamad Agy Nurwicaksono</h1>
            <h3 className="text-2xl">Putra dari Agus dan Evy</h3>
            <Link
              href="https://www.instagram.com/agyson"
              className="flex items-center justify-center gap-2"
            >
              <InstagramLogo size={32} />
              <span className="text-2xl">agyson</span>
            </Link>
          </div>
          <span className="text-8xl ">&</span>
        </div>
        <div className="h-[15rem] bg-[url('/assets/bride.svg')] bg-cover bg-no-repeat"></div>
        <div className="py-12 font-bold space-y-4 text-center">
          <h1 className="text-4xl">Yoriko Angeline</h1>
          <h3 className="text-2xl">Putri dari Agus dan Ibu Tuti</h3>
          <Link
            href="https://www.instagram.com/yorikoangeline"
            className="flex items-center justify-center gap-2"
          >
            <InstagramLogo size={32} />
            <span className="text-2xl">yorikoangeline</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Bride;
