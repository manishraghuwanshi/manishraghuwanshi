import type { ExperienceItemData } from "../../types/experience";

interface ExperienceItemProps {
  item: ExperienceItemData;
  isLast?: boolean;
}

const typeStyles: Record<
  ExperienceItemData["type"],
  {
    label: string;
    badge: string;
  }
> = {
  training: {
    label: "Training",
    badge: "border-white/10 bg-white/5 text-zinc-300",
  },
  professional: {
    label: "Professional",
    badge: "border-[#1e3e62] bg-[#1e3e62]/20 text-[#a8c7df]",
  },
  additional: {
    label: "Additional",
    badge: "border-white/10 bg-white/5 text-zinc-400",
  },
};

export default function ExperienceItem({
  item,
  isLast = false,
}: ExperienceItemProps) {
  const styles = typeStyles[item.type];

  return (
    <article className="relative pl-10 sm:pl-12">
      {/* Timeline dot */}
      <span
        aria-hidden="true"
        className="absolute left-[3px] top-1.5 h-3 w-3 rounded-full border-2 border-black bg-[#1e3e62] ring-4 ring-[#1e3e62]/10"
      />

      {/* Timeline line */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[8px] top-5 h-[calc(100%+2rem)] w-px bg-gradient-to-b from-[#1e3e62] to-white/5"
        />
      )}

      <div className="pb-10">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${styles.badge}`}
          >
            {styles.label}
          </span>

          <span className="text-sm text-zinc-500">{item.period}</span>
        </div>

        <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
          {item.title}
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
          {item.description}
        </p>

        {item.highlights && item.highlights.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-sm leading-6 text-zinc-400"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1e3e62]"
                />

                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {item.technologies && item.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {item.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-1 text-xs font-medium text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}