"use client";

import Typed from "typed.js";
import { useEffect, useRef } from "react";

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
    <section className="h-screen px-9">
      <h1 className="pt-[68vh] font-montserrat text-3xl font-bold uppercase leading-7 tracking-[-3px]">
        Im Targonsky
        <br />
        Mykyta.
      </h1>

      <p className="mt-3 text-lg leading-6 tracking-[-2px]">
        Im a{" "}
        <span ref={positionEl} className="bg-[#F7BF00] px-0.5 py-1">
          video editor.
        </span>
        <br />
        From Kyiv.
      </p>
    </section>
  );
};

export default HeroSection;
