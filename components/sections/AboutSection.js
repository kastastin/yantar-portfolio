import Image from "next/image";

const AboutSection = () => {
  return (
    <section>
      <h2 className="mt-14 font-montserrat text-3xl font-bold uppercase leading-7 tracking-[-2px]">
        About me
      </h2>

      {/* Divider */}
      <div className="my-5 h-px bg-black" />

      <Image
        src="/icons/about.svg"
        alt="About"
        width={200}
        height={200}
        className="h-auto w-full border border-black"
      />

      <div className="mt-10 h-[1000px] bg-red-100">height</div>
    </section>
  );
};

export default AboutSection;
