import type { ExperienceTechnology } from "../../types/experience";

interface ExperienceTechProps {
  technologies: ExperienceTechnology[];
}

export default function ExperienceTech({
  technologies,
}: ExperienceTechProps) {
  return (
    <section aria-labelledby="technology-experience-heading">
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a8c7df]">
          Technology Exposure
        </p>

        <h2
          id="technology-experience-heading"
          className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Tools I worked with
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {technologies.map((technology) => (
          <article
            key={technology.name}
            className="group rounded-xl border border-white/10 bg-[#0b192c]/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1e3e62] hover:bg-[#0b192c]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-lg font-bold text-white">
                {technology.name}
              </h3>

              <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                {technology.category}
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {technology.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}