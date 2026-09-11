import { strongSkills, workingKnowledge } from "../../../data/home.data";

function Skills() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8c7df]">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Strong Suite / Working Knowledge
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SkillColumn {...strongSkills} />
          <SkillColumn {...workingKnowledge} />
        </div>
      </div>
    </section>
  );
}

type SkillColumnProps = {
  title: string;
  skills: string[];
};

function SkillColumn({ title, skills }: SkillColumnProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b192c] p-7">
      <h3 className="text-lg font-bold">{title}</h3>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
