"use client";

import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Image from "next/image";

const HeroSection = () => {
  const positionEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(positionEl.current, {
      strings: ["film editor.", "coffee drinker.", "video editor."],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="h-dvh w-full">
      <Image
        src="/images/phone.png"
        alt="Phone"
        width={200}
        height={400}
        priority
        className="absolute left-1/2 top-[75px] h-[50vh] w-auto translate-x-[calc(-50%+22.5px)] rotate-12"
      />

      {/* Delete:  */}
      <h1 className="pt-[70vh] font-montserrat text-3xl font-bold uppercase leading-7 tracking-[-3px] xs:mb-4 xs:text-center xs:tracking-[-1px]">
        Im Targonsky <br className="sm:hidden" />
        Mykyta.
      </h1>

      <p className="mt-3 text-lg leading-6 tracking-[-2px] xs:text-center">
        Im a{" "}
        <span ref={positionEl} className="bg-[#F7BF00] px-0.5 py-1">
          video editor.
        </span>
        <br />
        <span className="block xs:mt-2">From Kyiv.</span>
      </p>
    </section>
  );
};

export default HeroSection;
