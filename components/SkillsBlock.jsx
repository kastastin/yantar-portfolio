import { skills } from "@/constants";
import Progress from "@/components/Progress";

const SkillsBlock = () => {
  return (
    <>
      {skills.map((skill) => (
        <div key={skill.title} className="space-y-2">
          <div className="mt-4 flex justify-between font-bold">
            <span>{skill.title}</span>
            <span>{skill.level}%</span>
          </div>

          <Progress progress={skill.level} />
        </div>
      ))}
    </>
  );
};

export default SkillsBlock;
