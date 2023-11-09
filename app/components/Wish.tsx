import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { lovelyCoffee } from "../fonts";

function Wish() {
  return (
    <section id="wish" className="relative">
      <div className="absolute top-80 inset-x-0 h-[650px] bg-[url('/assets/wishes-bg.svg')] bg-cover bg-no-repeat"></div>
      <div className="px-6 pt-32 z-10 relative">
        <h1
          className={`text-[#D5AF6F] text-7xl ${lovelyCoffee.className} text-center mb-8`}
        >
          Wedding Wish
        </h1>
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-[#D5AF6F] p-4">
            <div className="bg-white h-[115px] flex items-center justify-center text-5xl mb-4">
              0
            </div>
            <p className="text-3xl font-semibold text-center text-[#003C4C]">
              Ragu
            </p>
          </div>
          <div className="bg-[#D5AF6F] p-4">
            <div className="bg-white h-[115px] flex items-center justify-center text-5xl mb-4">
              0
            </div>
            <p className="text-3xl font-semibold text-center text-[#003C4C]">
              Hadir
            </p>
          </div>
          <div className="bg-[#D5AF6F] p-4">
            <div className="bg-white h-[115px] flex items-center justify-center text-5xl mb-4">
              0
            </div>
            <p className="text-3xl font-semibold text-center text-[#003C4C]">
              Absen
            </p>
          </div>
        </div>
        <div className="space-y-4 mb-12">
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
        <h3 className="text-[#D5AF6F] text-3xl font-bold mb-8">18 Wishes</h3>
        <div className="space-y-4 mb-8">
          <div className="p-6 bg-white rounded-md">
            <div className="flex items-end gap-3 mb-1">
              <h4 className="text-2xl font-bold">Darrell</h4>
              <p className="text-lg font-light">3h ago</p>
            </div>
            <p className="text-[1.35rem] font-light">
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
        </div>
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
