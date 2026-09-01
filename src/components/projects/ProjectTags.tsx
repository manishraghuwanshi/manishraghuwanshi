interface ProjectTagsProps {
  technologies: string[];
  limit?: number;
}

export default function ProjectTags({
  technologies,
  limit,
}: ProjectTagsProps) {
  const visibleTechnologies = limit
    ? technologies.slice(0, limit)
    : technologies;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTechnologies.map((technology) => (
        <span
          key={technology}
          className="
            rounded-full
            border border-[#1E3E62]/50
            bg-[#1E3E62]/10
            px-3 py-1.5
            text-xs font-medium
            text-[#A8C7DF]
            transition-colors duration-300
            group-hover:border-[#1E3E62]
            group-hover:bg-[#1E3E62]/20
          "
        >
          {technology}
        </span>
      ))}
    </div>
  );
}