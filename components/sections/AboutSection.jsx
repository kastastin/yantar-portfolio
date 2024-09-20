import Image from "next/image";

import Divider from "@/components/Divider";
import { education, experience } from "@/constants";
import SkillsBlock from "@/components/SkillsBlock";
import AboutList from "@/components/lists/AboutList";
import Testimonials from "@/components/Testimonials";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AboutSection = () => {
  return (
    <section id="about">
      <h2 className="h2-title">About me</h2>

      <Divider marginStyle="my-5" />

      <Image
        src="/icons/about.svg"
        alt="About"
        width={200}
        height={200}
        priority
        className="h-auto w-full border border-black"
      />

      <h3 className="h3-title mt-10">Mykyta Targonsky</h3>

      <Divider marginStyle="mt-1" width="w-6" />

      <p className="mt-2 text-sm tracking-tight">Video Editor</p>

      <Divider marginStyle="my-5" />

      <p className="font-montserrat text-sm font-medium">
        I am responsible, sociable, and can always find a common language. I am
        resistant to stressful situations, not at all conflict-averse, respect
        other people&apos;s opinions, and work for results. I have always had
        good relations with colleagues and employers.
      </p>

      <a
        href="/cv.pdf"
        download
        className="transition-all-03 group mt-10 inline-flex items-center gap-x-2 rounded-full border border-black bg-black px-6 py-2 font-montserrat text-xs font-semibold uppercase text-white hover:bg-transparent hover:text-black"
      >
        Download CV
        <Image
          src="/icons/download.svg"
          alt="Download"
          width={14}
          height={14}
          className="transition-all-03 relative translate-y-[-1.5px] invert group-hover:invert-0"
        />
      </a>

      <Divider marginStyle="mt-5 mb-10" />

      <Tabs defaultValue="skills" className="w-full">
        <TabsList variant="about">
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
        </TabsList>

        <TabsContent value="skills">
          <SkillsBlock />
        </TabsContent>

        <TabsContent value="education">
          <AboutList data={education} />
        </TabsContent>

        <TabsContent value="experience">
          <AboutList data={experience} />
        </TabsContent>
      </Tabs>

      <Divider marginStyle="mt-5 mb-10" />

      <Testimonials />

      <Divider marginStyle="mt-5 mb-10" />
    </section>
  );
};

export default AboutSection;
