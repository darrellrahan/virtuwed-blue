import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <section id="footer">
      <div className="h-[700px] flex items-center justify-center relative">
        <div className="absolute bottom-0 inset-x-0 h-[250px] bg-[url('/assets/footer-accent.png')] bg-cover bg-no-repeat"></div>
        <Image
          src="/assets/footer.svg"
          alt="logo"
          width={300}
          height={300}
          className="-translate-y-16"
        />
      </div>
    </section>
  );
}

export default Footer;
