import Image from "next/image";

import { socials, socialsImgSize } from "@/constants";

const LeftSidebar = () => {
  return (
    <aside className="fixed top-0 flex h-dvh w-[55px] flex-col items-center border-r border-black">
      <div className="flex-center transition-all-03 group h-[55px] w-full shrink-0 cursor-pointer border-b border-black hover:bg-black">
        <Image
          src="/icons/menu.svg"
          alt="Menu"
          width={25}
          height={25}
          className="transition-all-05 group-hover:invert"
        />
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
              width={socialsImgSize}
              height={socialsImgSize}
              className="transition-all-05 group-hover:invert"
            />
          </a>
        ))}
      </div>
    </aside>
  );
};

export default LeftSidebar;
