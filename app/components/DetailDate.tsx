import React from "react";
import { lovelyCoffee } from "../fonts";

function DetailDate() {
  return (
    <section id="detail-date">
      <div className="px-6 py-12">
        <h1 className={`text-center text-8xl mb-8 ${lovelyCoffee.className}`}>
          Save
          <br />
          The Date
        </h1>
        <h3 className="text-center text-[4.25rem] leading-[1] font-light">
          00:00:00:00
        </h3>
      </div>
    </section>
  );
}

export default DetailDate;
