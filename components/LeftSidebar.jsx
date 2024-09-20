"use client";

import { useState } from "react";
import Image from "next/image";

import { socials } from "@/constants";
import MenuList from "@/components/lists/MenuList";

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <aside className="fixed top-0 flex h-dvh w-[55px] flex-col items-center border-r border-black">
        <div
          className="flex-center h-[55px] w-full shrink-0 cursor-pointer border-b border-black"
          onClick={toggleMenu}
        >
          <button className={`menu menu-anim ${isOpen && "is-active"}`}>
            <span />
          </button>
        </div>

        <p className="flex-center relative mb-auto size-full">
          <span className="absolute rotate-[270deg] font-caveat text-4xl font-medium">
            Yantar
          </span>
        </p>

        <div className="w-full">
          {socials.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-center transition-all-03 group h-[55px] border-t border-black hover:bg-black"
            >
              <Image
                src={link.src}
                alt={link.alt}
                width={25}
                height={25}
                className="transition-all-05 group-hover:invert"
              />
            </a>
          ))}
        </div>
      </aside>
      <nav className={`menu-slide ${isOpen ? "open" : ""}`}>
        <MenuList />
      </nav>
    </>
  );
};

export default LeftSidebar;
