import ExperienceItem from "./ExperienceItem";
import type { ExperienceItemData } from "../../types/experience";

interface ExperienceSectionProps {
  items: ExperienceItemData[];
}

export default function ExperienceSection({
  items,
}: ExperienceSectionProps) {
  return (
    <section aria-labelledby="career-journey-heading">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a8c7df]">
          Career Journey
        </p>

        <h2
          id="career-journey-heading"
          className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          From training to professional development
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          A concise look at the different stages and responsibilities that
          shaped my professional development.
        </p>
      </div>

      <div>
        {items.map((item, index) => (
          <ExperienceItem
            key={item.id}
            item={item}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </section>
  );
}