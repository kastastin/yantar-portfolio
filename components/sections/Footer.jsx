import Image from "next/image";

import { socials } from "@/constants";
import Divider from "@/components/Divider";

const Footer = () => {
  return (
    <footer className="mb-5 mt-20 md:mt-14 2xl:mb-10">
      <Divider marginStyle="mb-5 2xl:mb-10" />

      <p className="text-center text-xs md:text-base 2xl:text-lg">
        © 2024 Targonsky Mykyta Portfolio. All Rights Reserved.
      </p>

      <div className="mt-5 flex justify-center gap-x-2">
        {socials.map((link) => (
          <a
            key={link.alt}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out hover:-translate-y-1"
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={20}
              height={20}
              className="md:size-[30px] 2xl:size-[35px]"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
