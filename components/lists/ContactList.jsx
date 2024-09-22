import Image from "next/image";

import { contacts } from "@/constants";

const ContactList = () => (
  <div className="space-y-5 md:space-y-8 lg:self-center 2xl:self-start">
    {contacts.map((item) => (
      <div
        key={item.src}
        className="relative flex min-h-[30px] flex-wrap items-center gap-2 md:min-h-[50px] md:gap-5"
      >
        <div className="flex-center size-[30px] shrink-0 bg-black md:size-[50px]">
          <Image
            src={item.src}
            alt={item.alt}
            width={20}
            height={20}
            className="invert md:size-[35px]"
          />
        </div>

        {!["Email", "Phone"].includes(item.alt) && (
          <span className="shrink text-sm font-bold tracking-tight md:text-xl">
            {item.text}
          </span>
        )}

        {item.alt === "Email" && (
          <a
            href={`mailto:${item.text}`}
            className="shrink text-sm font-bold tracking-tight md:text-xl"
          >
            {item.text}
          </a>
        )}

        {item.alt === "Phone" && (
          <a
            href={`tel:${item.text}`}
            className="shrink text-sm font-bold tracking-tight md:text-xl"
          >
            {item.text}
          </a>
        )}
      </div>
    ))}
  </div>
);

export default ContactList;
