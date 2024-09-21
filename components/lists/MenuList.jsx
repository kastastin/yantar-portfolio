import Image from "next/image";
import { menuLinks } from "@/constants";

const MenuList = () => {
  const handleClick = (e, href) => {
    e.preventDefault();

    const targetElement = document.querySelector(href);

    if (targetElement) {
      // 75px (55px + 5mt) | md: 115px (75px + 10mt)
      // TODO: check
      const offset = window.innerWidth > 768 ? 115 : 75;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <ul className="flex h-full items-center justify-around text-black">
      {menuLinks.map((link) => (
        <li
          key={link.title}
          className="transition-all-03 group h-full flex-1 gap-x-1 border-r border-black last:border-r-0 hover:bg-black"
        >
          <a
            href={link.href}
            className="flex-center size-full"
            onClick={(e) => handleClick(e, link.href)}
          >
            <Image
              src={link.icon}
              alt={link.title}
              width={25}
              height={25}
              className="transition-all-05 group-hover:invert md:size-[35px]"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
