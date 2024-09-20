import Image from "next/image";
import { menuLinks } from "@/constants";

const MenuList = () => {
  const handleClick = (e, href) => {
    e.preventDefault();

    const targetElement = document.querySelector(href);

    if (targetElement) {
      const offset = 75; // px from top (55px + 5mt)
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
              className="transition-all-05 group-hover:invert"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
