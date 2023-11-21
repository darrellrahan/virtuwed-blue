"use client";

import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useDataContext } from "../context";
import { lovelyCoffee } from "../fonts";

function Wish() {
  const { data, getData } = useDataContext();
  const [inputValue, setInputValue] = useState({
    presence: 1,
    wishes: "",
  });

  function post() {
    const formdata = new FormData();
    formdata.append("wedding_slug", "fajar-tiara");
    formdata.append("guest_slug", "muhammad-agy-nurwicaksono-LwzfkA");
    formdata.append("ucapan", inputValue.wishes);
    formdata.append("status_kehadiran", inputValue.presence.toString());

    fetch("https://panel.virtuwed.id/api/guest/ucapan/undangan", {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.text())
      .then((result) => {
        setInputValue({
          presence: 1,
          wishes: "",
        });
        getData();
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }

  if (!data) return null;

  return (
    <section id="wish" className="relative">
      <div className="absolute top-80 inset-x-0 h-[650px] bg-[url('/assets/wishes-bg.svg')] bg-cover bg-no-repeat lg:hidden"></div>
      <div className="absolute top-48 inset-x-0 h-[850px] bg-[url('/assets/wishes-bg-desktop.svg')] bg-cover bg-no-repeat hidden lg:block"></div>
      <div className="px-6 lg:px-16 pt-16 lg:pt-32 z-10 relative">
        <Fade direction="up">
          <h1
            className={`text-[#D5AF6F] text-7xl lg:text-8xl ${lovelyCoffee.className} text-center mb-8 lg:mb-16`}
          >
            Wedding Wishes
          </h1>
        </Fade>
        <Fade direction="up">
          <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-12 lg:w-[600px] lg:mx-auto">
            <div className="bg-[#D5AF6F] p-4">
              <div className="bg-white h-[115px] lg:h-[180px] flex items-center justify-center text-5xl lg:text-7xl mb-4">
                {
                  data.data.wedding.undangan_digital.ucapan_undangan_digital
                    .hadir
                }
              </div>
              <p className="text-3xl font-semibold text-center text-[#003C4C]">
                Hadir
              </p>
            </div>
            <div className="bg-[#D5AF6F] p-4">
              <div className="bg-white h-[115px] lg:h-[180px] flex items-center justify-center text-5xl lg:text-7xl mb-4">
                {
                  data.data.wedding.undangan_digital.ucapan_undangan_digital
                    .tidak_hadir
                }
              </div>
              <p className="text-3xl font-semibold text-center text-[#003C4C]">
                Absen
              </p>
            </div>
            <div className="bg-[#D5AF6F] p-4">
              <div className="bg-white h-[115px] lg:h-[180px] flex items-center justify-center text-5xl lg:text-7xl mb-4">
                {
                  data.data.wedding.undangan_digital.ucapan_undangan_digital
                    .ragu
                }
              </div>
              <p className="text-3xl font-semibold text-center text-[#003C4C]">
                Ragu
              </p>
            </div>
          </div>
          <div className="space-y-4 mb-12 lg:mb-32 lg:w-[600px] lg:mx-auto">
            <div className="relative h-[60px]">
              <span className="absolute top-3.5 right-4">
                <CaretDown size={32} />
              </span>
              <select
                onChange={(e) =>
                  setInputValue({
                    ...inputValue,
                    presence: Number(e.target.value),
                  })
                }
                value={inputValue.presence}
                className="h-full w-full rounded-md px-4 flex items-center appearance-none cursor-pointer text-xl font-semibold"
              >
                <option value={1}>Hadir</option>
                <option value={0}>Absen</option>
                <option value={2}>Ragu</option>
              </select>
            </div>
            <div>
              <textarea
                onChange={(e) =>
                  setInputValue({ ...inputValue, wishes: e.target.value })
                }
                value={inputValue.wishes}
                placeholder="Your wish..."
                className="w-full h-[225px] rounded-md placeholder:text-black p-4 text-xl font-semibold"
              />
            </div>
            <div>
              <button
                onClick={post}
                className="rounded-md border-2 border-[#D5AF6F] bg-[#D5AF6F] text-[#003C4C] py-3 text-center w-full text-2xl font-bold"
              >
                Kirim
              </button>
            </div>
          </div>
        </Fade>
        <Zoom>
          <h3 className="text-[#D5AF6F] text-3xl lg:text-4xl lg:font-semibold lg:mb-10 font-bold mb-8">
            {
              data.data.wedding.undangan_digital.ucapan_undangan_digital.data
                .length
            }{" "}
            Wishes
          </h3>
        </Zoom>
        <Zoom>
          <div className="space-y-4 mb-8 lg:mb-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {data.data.wedding.undangan_digital.ucapan_undangan_digital.data.map(
              (data: any) => (
                <div key={data.nama} className="p-6 bg-white rounded-md">
                  <h4 className="text-2xl font-bold mb-1">{data.nama}</h4>
                  <p className="text-[1.35rem] font-light overflow-hidden">
                    {data.ucapan_invitation_text}
                  </p>
                </div>
              )
            )}
          </div>
        </Zoom>
        {/* <div className="flex justify-center">
          <button className="text-3xl border-b border-[#D5AF6F] text-[#D5AF6F]">
            See more
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Wish;
